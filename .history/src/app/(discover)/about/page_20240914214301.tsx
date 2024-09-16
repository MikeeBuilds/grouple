import { QueryClient } from "@tanstack/react-query"
import React from "react"

type Props = {
  params: {
    groupid: string
  }
}

const Page = ({ params }: Props) => {
  const query = new QueryClient()

  await query.prefetchQuery({
    queryKey: ["about-group-info"],
    queryFn: () => onGetGroupInfo(params.groupid),
  })

  await query.prefetchQuery({
    queryKey: ["active-subscription"],
    queryFn: () => onGetActiveSubscriptions(params.groupid),
  })

  return <div>Page</div>
}

export default Page
