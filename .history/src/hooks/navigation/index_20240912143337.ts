import { onGetGroupChannels } from "@/actions/groups"
import { IGroupInfo, IGroups } from "@/components/global/sidebar"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const useNavigation = () => {
    const pathName = usePathname()
    const [section, setSection] = useState<string>(pathName)
    const onSetSection = (page: string) => setSection(page)
    return {
        section,
        onSetSection,
    }
}

export const useSideBar = (groupid: string) => {
    const { data: groups } = useQuery({
        queryKey: ["user-groups"],
    }) as { data: IGroups }

    const { data: groupInfo } = useQuery({
        queryKey: ["group-info"],
    }) as { data: IGroupInfo }

    const { data: channels } = useQuery({
        queryKey: ["group-channels"],
        queryFn: () => onGetGroupChannels(groupid),
    })

    const client = useQueryClient()

    //We use
}
