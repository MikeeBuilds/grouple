import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"
import { PricingSection } from "./_components/pricing"

const Prici

export default function Home() {
    return (
        <main className="md:px-10 py-20 flex flex-col gap-36">
            <div>
                <CallToAction/>
                <DashboardSnippet/>
                <PricingSection/>
            </div>
        </main>
    )
}
