"use client"

import { AppDispatch } from "@/redux/store"
import { useEffect } from "react"

export const UseGroupChatOnline = (userid: string) => {
    const dispatch: AppDispatch()

    useEffect(() => {
        const channel = supabaseClient.channel("tracking")

        channel
            .on("presence")
    })
}