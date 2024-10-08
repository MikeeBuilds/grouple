"use client"

import { useNavigation } from "@/hooks/navigation"

type MenuProps = {
    orientation: "moblile" | "desktop"
}

type Props = { orientation: MenuProps }

const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case "desktop":
            return <div></div>

        case
            return <div></div>
    }
}

export default Menu
