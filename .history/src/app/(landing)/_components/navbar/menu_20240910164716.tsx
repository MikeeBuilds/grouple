"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useNavigation } from "@/hooks/navigation"
import Link from "next/link"

type MenuProps = {
    orientation: "moblile" | "desktop"
}

type Props = { orientation: MenuProps }

const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case "desktop":
            return (
                <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
                    <CardContent className="p-0 flex gap-2">
                        {GROUPLE_CONSTANTS.landingPageMenu.map((menu) => () => {
                            <Link
                              href={menu.path}
                              {...(menuItem.section && {
                                onClick: () => onSetSection(menuItem.path),
                              })}
                              className={cn("rounded-xl flex gap-2 py-2 px-4 items-center", section == MenubarItem.path ? "bg-[#09090B] border-[#27272A]" : "",
                              )}
                              key={MenubarItem.id}
                            >
                                {section == MenubarItem.path && MenubarItem.path}
                            </Link>
                        }
                    </CardContent>
                </Card>
            )
        case "moblile":
            return <div></div>
            default: return <></>
    }
}

export default Menu
