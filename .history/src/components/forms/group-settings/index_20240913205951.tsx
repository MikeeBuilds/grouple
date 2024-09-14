"use client"

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
  ;<form
    className="flex flex-col h-full items-start gap-y-5"
    onSubmit={onUpdate}
  >
    <div className="flex 2xl:flex-row flex-col gap-10">
      <div className="flex flex-col gap-3 items-start">
        <p>Group Preview</p>
        <GroupCard
          
        />
      </div>
    </div>
  </form>
}

export default GroupsettingsForm
