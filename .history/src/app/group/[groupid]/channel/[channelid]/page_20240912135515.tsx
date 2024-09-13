import { currentUser } from "@clerk/nextjs/server"
import { QueryClient } from "@tanstack/react-query"
import React from "react"

type Props = {}

const GroupChannelPage = async (props: Props) => {
  const client = new QueryClient()
  const user = await currentUser

  return <div>GroupChannelPage</div>
}

export default GroupChannelPage
