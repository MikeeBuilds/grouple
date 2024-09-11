import React from "react"

type Props = {
    children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
    return (
        <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
            <div className=""></div>
        </div>
    )
}

export default CreateGroupLayout
