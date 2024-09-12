import React from 'react'

type Props = {
    groupid: string
    userid: string
    mobile?: boolean
}

export interface IChannels {
    id: string
    name: string
    icon: string
    createdAt: Date
    groupId: string | null
  }
  
  export interface IGroups {
    status: number
    groups:
      | {
          icon: string | null
          id: string
          name: string
        }[]
      | undefined
  }

const SideBar = ({ userid, groupid, mobile }: Props) => {
    const { groupInfo, groups, mutate, variables, isPending, channels } = useSideBar(groupid) =>
  return (
    <div>SideBar</div>
  )
}

export default SideBar