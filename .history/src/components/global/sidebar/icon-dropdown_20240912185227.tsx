import React from "react"

type Props = {
  ref: React.RefObject<HTMLButtonElement>
  icon: string
  page?: string
  channelid?: string
  currentIcon(icon: string): void
}

const IconDropDown = (props: Props) => {
  return <div>IconDropDown</div>
}

export default IconDropDown
