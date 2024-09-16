import { useGroupInfo } from "@/hooks/groups"
import React from "react"

type Props = { userid: string; groupid: string }

const about = ({ groupid, userid }: Props) => {
  const { group } = useGroupInfo()
  const {} = UseGroupAbout
  return <div>about</div>
}

export default about
