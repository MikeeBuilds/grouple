import React from "react"

type Props = {
  children: React.ReactNode
  params: {
    groupid: string
  }
}

const GroupLayout = async ({ children, params }: props) => {
  return <div>GroupLayout</div>
}

export default GroupLayout
