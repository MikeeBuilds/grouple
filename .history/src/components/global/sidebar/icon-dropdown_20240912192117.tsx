import React from 'react'
import { DropDown } from '../drop-down'
import { IconRenderer } from '../icon-renderer'

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
    <DropDown ref={ref} title="Pick your icon"
    trigger={
        <span>
            <IconRenderer
            icon={icon}
            mode={page === channelid ? "LIGHT" : "DARK"}
            />
        </span>
    }>
        {icon}
    </DropDown>
  )
}
}

export default IconDropDown