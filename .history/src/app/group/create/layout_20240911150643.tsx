import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { GROUPLE_CONSTANTS } from "@/constants"
import React from "react"

type Props = {
  children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
      <div className="flex items-center">
        <BackdropGradient className="w-8/12 h-2/6 opacity-30">
          <h5 className="text-2xl font-bold text-themeTextWhite">Cannova.</h5>
          <GradientText element="H2" className="text-4xl font-semibold py-1">
            Create Your Group
          </GradientText>
          <p className="text-themeTextGray">
            Free for 14 days, Then $99/month. Cancel anytime. All features.
            Unlimited everything. No hidden fees.
          </p>
          <div className="flex flex-col gap-3 mt-16 pl-5">
            {GROUPLE_CONSTANTS.createGroupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                {placeholder.icon}
                <p className="text-themeGray">{placeholder.label}</p>
              </div>
            ))}
          </div>
        </BackdropGradient>
      </div>
    </div>
  )
}

export default CreateGroupLayout
