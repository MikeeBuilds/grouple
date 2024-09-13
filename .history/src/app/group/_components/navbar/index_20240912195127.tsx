import { currentUser } from "@clerk/nextjs/server"

type NavbarProps = {
  groupid: string
  userid: string
}

export const Navbar = async ({ groupid, userid }: NavbarProps) => {
  const user = await currentUser()
  return (
    <div className="ng-[#1a1a1D] py-2 px-3 md:px-7 md:py-5 flex gap-5 justify-between md:"></div>
  )
}
