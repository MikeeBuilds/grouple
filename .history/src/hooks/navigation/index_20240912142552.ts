import { useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const useNavigation = () => {
    const pathName = usePathname()
    const [section, setSection] = useState<string>(pathName)
    const onSetSection = (page: string) => setSection(page)
    return {
        section,
        onSetSection,
    }
}


export const useSideBar = (groupid: string) => {
    const { data: groups } = useQuery({
        queryKey: ["user-groups"], 
    }) as { data}
}