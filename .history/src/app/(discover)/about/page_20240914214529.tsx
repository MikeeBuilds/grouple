import { onAuthenticatedUser } from '@/actions/auth'
import { onGetGroupInfo } from '@/actions/channels'
import { onGetActiveSubscription } from '@/actions/payments'
import { QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    params: {
        groupid: string
    }
}

const Page = async ({params}: Props) => {
    const query = new QueryClient()

    await query.prefetchQuery({
        queryKey: ["about-group-info"],
        queryFn: () => onGetGroupInfo(params.groupid),
    })

    await query.prefetchQuery({
        queryKey: ["active-subscription"],
        queryFn: () => onGetActiveSubscription(params.groupid),
    })

    const userid = await onAuthenticatedUser()



  return (
    
  )
}

export default Page