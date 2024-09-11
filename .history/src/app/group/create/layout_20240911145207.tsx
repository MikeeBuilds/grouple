import BackdropGradient from "@/components/global/backdrop-gradient"
import React from "react"

type Props = {
    children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
    return (
        <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
            <div className="flex items-center">
                <BackdropGradient className="w-8/12 h-2/6 opacity"></BackdropGradient>
            </div>
        </div>
    )
}

export default CreateGroupLayout
