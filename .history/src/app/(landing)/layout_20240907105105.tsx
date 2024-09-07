type Props = {}

const LandingPageLayout = ({ children }: {children: React.ReactNode}) => {
    return <div className="flex flex-col container relative">
        <LandingPageL
        {children}
        </div>
}

export default LandingPageLayout