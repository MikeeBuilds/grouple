import { IChannels } from "."

type Props = {
  channels: IChannels[]
  optimisticChannel: {
    id: string
    name: string
    icon: string
    createdAt: Date
    groupId: string | null
  }
}
