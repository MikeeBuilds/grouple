type Props = {}

const LandingPage = ({ children }: {children: React.ReactNode}) => {
    return <div className="flex flex-col container relative">
        <LandingPageNavbar></LandingPageNavbar>
        {children}
        </div>
}

export default LandingPageLayout