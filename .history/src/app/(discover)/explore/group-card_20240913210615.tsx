import Link from "next/link"
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

const GroupCard = ({
  id,
  userId,
  thumbnail,
  name,
  category,
  description,
  privacy,
  preview,
}: Props) => {
  return <Link href={}></Link>
}

export default GroupCard
