import React from 'react'

type Props = {
    children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
const user = await onAuththenticatedUser()

  return (
    <div>AuthLayout</div>
  )
}

export default AuthLayout