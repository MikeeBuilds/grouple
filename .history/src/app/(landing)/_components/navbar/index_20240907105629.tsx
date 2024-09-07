type Props = {}

const LandingPageNavbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-">Grouple</p>
        </div>
    )
}

export default LandingPageNavbar
