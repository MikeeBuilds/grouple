"use server"

import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticatedUser = async () => {
  try {
    const clerk = await currentUser()
    if (!clerk) return
  } catch (error) {}
}
