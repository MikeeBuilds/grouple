import { onAuthenticatedUser } from '@/actions/auth'
import { onGetGroupInfo } from '@/actions/groups'
import { QueryClient } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: {
        groupid: string
    }
}

const GroupLayout = async ({children, params}: Props) => {
    const query = new QueryClient()

    const user = await onAuthenticatedUser()
    if(!user.id) redirect('/sign-in')

        //group info
        await query.prefetchQuery({
            queryKey: ["group-info"],
            queryFn: () => onGetGroupInfo(params.groupid),
        })
        //users groups
        await query.prefetchQuery({
            queryKey: ["user-groups"],
            queryFn: () => onGetAffiliateInfo(user.id),
        })
        //channels
        // group subscriptions
        // member chats


  return (
    <div>GroupLayout</div>
  )
}

export default GroupLayout