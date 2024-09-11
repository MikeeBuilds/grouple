import Link from "next/link"
import Menu from "./menu"

type Props = {}

const LandingPageNavbar = (props: Props) => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-2xl">Grouple</p>
            <Menu orientation="desktop" />
            <div className="flex gap-2">
                <Link href="/sign-in"></Link>
            </div>
        </div>
    )
}

export default LandingPageNavbar
