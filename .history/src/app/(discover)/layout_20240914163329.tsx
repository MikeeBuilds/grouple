import React from "react"
import { Navba}
type ExploreLayoutProps = {
  children: React.ReactNode
}

const DiscoverLayout = ({ children }: ExploreLayoutProps) => {
  return <div className="flex flex-col min-h-screen bg-black pb-10">
    <Navbar />
    {children}
  </div>
}

export default DiscoverLayout
