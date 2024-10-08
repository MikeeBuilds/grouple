import { onAuthenticatedUser } from "@/actions/auth"
import { QueryClient } from "@tanstack/react-query"
import { redirect } from "next/navigation"
import React from "react"

type Props = {
  children: React.ReactNode
  params: {
    groupid: string
  }
}

const GroupLayout = async ({ children, params }: Props) => {
  const query = new QueryClient()

  const user = await onAuthenticatedUser()
  if (!user.id) redirect("/sign-in")

  //group info
  //usew

  return <div>GroupLayout</div>
}

export default GroupLayout
