'use client'

import { useNavigation } from "react-day-picker"

type MenuProps = {
    orientation: "moblile" | "desktop"
}

type Props = { orientation: MenuProps}

const Menu = (props: Props) => {
  return (
    const { section, onSetSection } = useNavigation()
    <div>Menu</div>
  )
}

export default Menu