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
      return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounde"></Card>
      )
    case "moblile":
      return <div></div>
      desfault: return <></>
  }
}

export default Menu
