"use client"

import { useNavigation } from "@/hooks/navigation"

type MenuProps = {
    orientation: "moblile" | "desktop"
}

type Props = { orientation: MenuProps }

const Menu = (props: Props) => {
    const { section, onSetSection } = useNavigation()
    swit
}

export default Menu
