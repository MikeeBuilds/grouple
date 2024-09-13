import { onAuthenticatedUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server"
import { QueryClient } from "@tanstack/react-query"
import React from "react"

type Props = {}

const GroupChannelPage = async (props: Props) => {
  const client = new QueryClient()
  const user = await currentUser()
  const authUser = await onAuthenticatedUser()

  await client.pre

  return <div>GroupChannelPage</div>
}

export default GroupChannelPage
