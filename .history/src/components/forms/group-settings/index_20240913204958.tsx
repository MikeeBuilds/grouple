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
  
}

export default GroupsettingsForm
