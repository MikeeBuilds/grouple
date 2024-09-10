import React from 'react'

type Props = {
    element?: "H1" | "H2"
    children: React.ReactNode
    className?: string
}

const GradientText = ({ children, className, element }: Props) => {
  switch (element) {
    case "H1":
        return (
            <h1></h1>
        )
  }
}

export default GradientText