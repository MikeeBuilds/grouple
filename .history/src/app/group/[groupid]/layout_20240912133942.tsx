import { onAuthenticatedUser } from '@/actions/auth'
import { QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: {
        groupid: string
    }
}

const GroupLayout = async ({children, params}: Props) => {
    const query = new QueryClient()

    const user = await onAuthenticatedUser()

  return (
    <div>GroupLayout</div>
  )
}

export default GroupLayout