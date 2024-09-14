import { useGroupSettings } from "@/hooks/groups"
import React from "react"

type Props = {
  groupId: string
}

const GroupsettingsForm = ({ groupId }: Props) => {
  const {
    data,
    register,
    errors,
    onUpdate,
    isPending,
    previewIcon,
    previewThumbnail,
    onJsonDescription,
    setJsonDescription,
    setOnDescription,
    onDescription,
  } = useGroupSettings(groupId)

  return 
  <form className="flex flex-col h-full items-start gap-y-5" ons></form>
}

export default GroupsettingsForm
