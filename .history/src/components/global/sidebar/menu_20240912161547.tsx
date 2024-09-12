"use client"

import { usePathname } from "next/navigation"
import { IChannels } from "."

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
        oneditCha
    }

    return <div>SideBarMenu</div>
}

export default SideBarMenu
