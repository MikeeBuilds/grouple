"use client"

import { AppDispatch } from "@/redux/store"
import { useEffect } from "react"

export const UseGroupChatOnline = (userid: string) => {
    const dispatch: AppDispatch()

    useEffect(() => {
        const channel = supabaseClient.channel("tracking")

        channel
            .on("presence", { event: "sync"}, ( => {
                const state: any = channel.presenceState()
                console.log(state)
                for (const user in state) {
                    dispatch(
                        onOnline
                    )
                }
            })) 
    })
}