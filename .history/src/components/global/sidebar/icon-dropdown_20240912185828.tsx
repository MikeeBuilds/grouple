import React from 'react'

type Props = {
    ref: React.RefObject<HTMLButtonElement>
    icon: string
    page?: string
    channelid?: string
    currentIcon?: string
    onSetIcon(icon: string): void
}
const IconDropDown = ({
    ref, 
    icon,
    page,
    channelid,
    onSetIcon,
    currentIcon,
}: Props) => {
const IconDropDown = (props: Props) => {
  return (
    <Drop
  )
}
}

export default IconDropDown