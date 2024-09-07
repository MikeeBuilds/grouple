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
            return <Card className="bg-themeGray borderthe"></Card>
        case "moblile":
            return <div></div>
            desfault:
            return <></>  


    }
}

export default Menu
