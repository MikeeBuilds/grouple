import { QueryClient } from "@tanstack/react-query"
import React from "react"

type Props = {
  params: {
    groupid: string
  }
}

const Page = ({ params }: Props) => {
  const query = new QueryClient()

  await query

  return <div>Page</div>
}

export default Page
