import { onAuthenticatedUser } from '@/actions/auth'
import { onGetGroupInfo } from '@/actions/channels'
import { onGetActiveSubscription } from '@/actions/payments'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
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
    <HydrationBoundary state={dehydrate(query)}>
        <div className='pt-36 pb-10 container grid'></div>
    </HydrationBoundary>
  )
}

export default Page