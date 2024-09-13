import { currentUser } from "@clerk/nextjs/server"

type NavbarProps = {
  groupid: string
  userid: string
}

export const Navbar = async ({ groupid, userid }: NavbarProps) => {
  const user = await currentUser()
  return
}
