import GradientText from "@/components/global/gradient-text"
import React from "react"

type Props = {}

const CallToAction = (props: Props) => {
    return (
        <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
            <GradientText>
                Bringing communitites <br className="md:hidden"/> Together 
            </GradientText>
        </div>
    )
}

export default CallToAction
