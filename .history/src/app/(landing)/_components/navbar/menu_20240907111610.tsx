"use client"

import { useNavigation } from "@/hooks/navigation"

type MenuProps = {
    orientation: "moblile" | "desktop"
}

type Props = { orientation: MenuProps }

const Menu = ({ orientation }: Props) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case :
            break

        default:
            break
    }
}

export default Menu
