type Props = {}

const LandingPageLayout = ({ children }: {children: React.ReactNode}) => {
    return <div className="flex flex-col container relative">
        <LandingPageLayout
        {children}
        </div>
}

export default LandingPageLayout