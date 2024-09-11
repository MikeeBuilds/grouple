import Menu from "./menu"

type Props = { ori }

const LandingPageNavbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-2xl">Grouple</p>
            <Menu orientation="desktop" />
        </div>
    )
}

export default LandingPageNavbar
