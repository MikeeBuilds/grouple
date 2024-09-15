import { useGroupInfo } from '@/hooks/groups'
import React from 'react'

type Props = { userid: string, groupid: string }

const AboutGroup = ({ userid, groupid }: Props) => {
    const { group } = useGroupInfo()
  return (
    <div>AboutGroup</div>
  )
}

export default AboutGroup