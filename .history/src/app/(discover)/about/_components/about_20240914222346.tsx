import React from 'react'

type Props = { userid: string, groupid: string }

const about = ({ groupid, userid}: Props) => {
  const { group } = useGroup
  return (
    <div>about</div>
  )
}

export default about