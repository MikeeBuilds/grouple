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

const SideBarMenu = {props: Props} => {
    return (
        <div>
            SideBarMenu
        </div>
    )
}

export 