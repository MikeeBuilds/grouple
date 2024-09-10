import React from 'react'

type GradientTextProps = {
    element?: "H1" | "H2"
    children: React.ReactNode
    className?: string
}

const GradientText = ({ children, class}) => {
  return (
    <div>GradientText</div>
  )
}

export default GradientText