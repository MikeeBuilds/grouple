import path from "path"

export const LANDING_PAGE_MENU: MenuProps[] = [
    {
        id: 0,
        label: "Home",
        icon: <Home />,
        path: "/",
        section: true,
    },
    {
        id: 1,
        label: "About",
        icon: <Info />,
        path: "/about",
        section: true,
    },
]
