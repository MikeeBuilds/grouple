import React from "react"

type Props = {
  id: string
  name: string
  category: string
  createdAt: string
  userId: string
  thumbnail: string
  description: string
  privacy: "PUBLIC" | "PRIVATE"
  preview: string
}

const GroupCard = ({}: Props) => {
  return <div>GroupCard</div>
}

export default GroupCard
