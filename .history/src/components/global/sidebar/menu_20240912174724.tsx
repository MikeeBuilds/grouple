"use client"

import { usePathname } from "next/navigation"
import { IChannels } from "."
import { UseChannelInfo } from "@/hooks/channels"

type Props = {
    channels: IChannels[]
    optimisticChannel:
        | {
              id: string
              name: string
              icon: string
              createdAt: Date
              groupId: string | null
          }
        | undefined
    loading: boolean
    groupid: string
    groupUserId: string
    userId: string
}

const SideBarMenu = ({
    channels,
    groupUserId,
    groupid,
    loading,
    optimisticChannel,
    userId,
}: Props) => {

    const pathname = usePathname()
    const currentPage = pathname.split("/").pop()
    
    const {
        channel: current,
        onEditChannel,
        channelRef,
        inputRef,
        variables,
        isPending,
        edit,
        triggerRef,
        onSetIcon,
        icon,
        onDeleteChannel,
        deleteVariables,
    } = UseChannelInfo()
    if (path)

    return <div>SideBarMenu</div>
}

export default SideBarMenu
