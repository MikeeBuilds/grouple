import React from "react"

type Props = {
  element?: "H1" | "H2"
  children: React.ReactNode
  className?: string
}

const GradientText = ({ children, className, element }: Props) => {
  return <div>GradientText</div>
}

export default GradientText
