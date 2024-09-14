import React from "react"
import { Navbar } from "../group/_components/navbar"

type ExploreLayoutProps = {
  children: React.ReactNode
}

const DiscoverLayout = ({ children }: ExploreLayoutProps) => {
  return <div className="flex flex-col min-h-screen bg-black pb-10">
    <Navbar />
  </div>
}

export default DiscoverLayout
