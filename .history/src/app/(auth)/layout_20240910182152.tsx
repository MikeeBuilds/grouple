import React from "react"

type Props = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  const user = await onAuth

  return <div>AuthLayout</div>
}

export default AuthLayout
