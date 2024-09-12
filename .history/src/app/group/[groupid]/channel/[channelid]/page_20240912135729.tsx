import { onAuthenticatedUser } from '@/actions/auth'
import { onGetGroupInfo } from '@/actions/groups'
import { currentUser } from '@clerk/nextjs/server'
import { QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {}

const GroupChannelPage = async (props: Props) => {
    const client = new QueryClient()
    const user = await currentUser()
    const authUser = await onAuthenticatedUser()

    await client.prefetchQuery({
        queryKey: ["channel-info"],
        queryFn: () => onGetChannelInfo(params.channelid
    })

    await client.prefetchQuery({
        queryKey: ["about-group-info"],
        queryFn: () => onGetGroupInfo(params.channelid
    })


  return (
    <div>GroupChannelPage</div>
  )
}

export default GroupChannelPage