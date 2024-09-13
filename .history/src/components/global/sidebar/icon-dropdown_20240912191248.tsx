import React from "react"
import { DropDown } from "../drop-down"

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
      <DropDown
        ref={ref}
        title="Pick your icon"
        trigger={
          <span>
            <IconRender
              icon={icon}
              mode={page === channelid ? "LIGHT" : "DARK"}
            />
          </span>
        }
      ></DropDown>
    )
  }
}

export default IconDropDown
