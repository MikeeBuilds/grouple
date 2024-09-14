"use client"

import {
  onGetGroupInfo,
  onSearchGroups,
  onUpDateGroupSettings,
} from "@/actions/groups"
import { supabaseClient } from "@/lib/utils"
import { onOnline } from "@/redux/slices/online-member-slice"
import { onClearSearch, onSearch } from "@/redux/slices/search-slice"
import { AppDispatch } from "@/redux/store"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { JSONContent } from "novel"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { GroupSettingsSchema } from "@/components/forms/group-settings/schema"
import { toast } from "sonner"
import { upload } from "@/lib/uploadcare"
import { useRouter } from "next/router"

export const useGroupChatOnline = (userid: string) => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const channel = supabaseClient.channel("tracking")

    channel
      .on("presence", { event: "sync" }, () => {
        const state: any = channel.presenceState()
        console.log(state)
        for (const user in state) {
          dispatch(
            onOnline({
              members: [{ id: state[user][0].member.userid }],
            }),
          )
        }
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            member: {
              userid,
            },
          })
        }
      })

    return () => {
      channel.unsubscribe()
    }
  }, [])
}

export const useSearch = (search: "GROUPS" | "POSTS") => {
  const [query, setQuery] = useState<string>("")
  const [debounce, setDebounce] = useState<string>("")

  const dispatch: AppDispatch = useDispatch()

  const onSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebounce(query)
    }, 1000)
    return () => clearTimeout(delayInputTimeoutId)
  }, [query, 1000])

  const { refetch, data, isFetched, isFetching } = useQuery({
    queryKey: ["search-data", debounce],
    queryFn: async ({ queryKey }) => {
      if (search === "GROUPS") {
        const groups = await onSearchGroups(search, queryKey[1])
        return groups
      }
    },
    enabled: false,
  })

  if (isFetching)
    dispatch(
      onSearch({
        isSearching: true,
        data: [],
      }),
    )

  if (isFetched)
    dispatch(
      onSearch({
        isSearching: false,
        status: data?.status as number,
        data: data?.groups || [],
        debounce,
      }),
    )

  useEffect(() => {
    if (debounce) refetch()
    if (!debounce) dispatch(onClearSearch())
    return () => {
      debounce
    }
  }, [debounce])

  return { query, onSearchQuery }
}

export const useGroupSettings = (groupid: string) => {
  const router = useRouter()
  const dispatch: AppDispatch = useDispatch()

  // Fetch group info
  const { data } = useQuery({
    queryKey: ["group-info"],
    queryFn: () => onGetGroupInfo(groupid),
  })

  // States for description and JSON content
  const [onJsonDescription, setJsonDescription] = useState<
    JSONContent | undefined
  >(
    data?.group?.jsonDescription
      ? JSON.parse(data.group.jsonDescription)
      : undefined,
  )
  const [onDescription, setOnDescription] = useState<string | undefined>(
    data?.group?.description || undefined,
  )

  // Form setup
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<z.infer<typeof GroupSettingsSchema>>({
    resolver: zodResolver(GroupSettingsSchema),
    mode: "onChange",
  })

  // Handle previews for icon and thumbnail
  const [previewIcon, setPreviewIcon] = useState<string | undefined>(undefined)
  const [previewThumbnail, setPreviewThumbnail] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    const previews = watch(({ thumbnail, icon }) => {
      if (icon?.[0]) setPreviewIcon(URL.createObjectURL(icon[0]))
      if (thumbnail?.[0]) setPreviewThumbnail(URL.createObjectURL(thumbnail[0]))
    })
    return () => previews.unsubscribe()
  }, [watch])

  // Set descriptions in the form
  const onSetDescriptions = () => {
    setValue("jsondescription", JSON.stringify(onJsonDescription))
    setValue("description", onDescription)
  }

  useEffect(() => {
    onSetDescriptions()
  }, [onJsonDescription, onDescription])

  // Handle form submission and group updates
  const { mutate: update, isPending } = useMutation({
    mutationKey: ["group-settings"],
    mutationFn: async (values) => {
      try {
        if (values.thumbnail?.[0]) {
          const uploaded = await upload.uploadFile(values.thumbnail[0])
          await onUpDateGroupSettings(
            groupid,
            "IMAGE",
            uploaded.uuid,
            `/group/${groupid}/settings`,
          )
        }
        if (values.icon?.[0]) {
          const uploaded = await upload.uploadFile(values.icon[0])
          await onUpDateGroupSettings(
            groupid,
            "ICON",
            uploaded.uuid,
            `/group/${groupid}/settings`,
          )
        }
        if (values.name) {
          await onUpDateGroupSettings(
            groupid,
            "NAME",
            values.name,
            `/group/${groupid}/settings`,
          )
        }
        if (values.description) {
          await onUpDateGroupSettings(
            groupid,
            "DESCRIPTION",
            values.description,
            `/group/${groupid}/settings`,
          )
        }
        if (values.jsondescription) {
          await onUpDateGroupSettings(
            groupid,
            "JSONDESCRIPTION",
            values.jsondescription,
            `/group/${groupid}/settings`,
          )
        }
        if (
          !values.name &&
          !values.description &&
          !values.thumbnail?.length &&
          !values.icon?.length &&
          !values.jsondescription
        ) {
          toast("Error", { description: "Oops! looks like your form is empty" })
        }
      } catch (error) {
        toast("Error", {
          description: "Something went wrong while updating group settings.",
        })
      }
    },
  })

  // Redirect if data status is incorrect
  useEffect(() => {
    if (data?.status !== 200) router.push("/group/create")
  }, [data?.status, router])

  const onUpdate = handleSubmit(async (values) => update(values))

  return {
    data,
    register,
    errors,
    onUpdate,
    isPending,
    previewIcon,
    previewThumbnail,
    onJsonDescription,
    setJsonDescription,
    setOnDescription,
    onDescription,
  }
}
