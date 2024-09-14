import { Card } from "@/components/ui/card"
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
  return (
    <Link href={`/about/${id}`}>
      <Card className="bg-themeBlack border-themeGray rounded-xl overflow-hidden">
        <img 
        src={preview || `https://ucarecdn.com/${thumbnail}`} alt="" 
        
        />
      </Card>
    </Link>
  )
}

export default GroupCard
