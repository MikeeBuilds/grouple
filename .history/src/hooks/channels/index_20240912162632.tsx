import { useQueryClient } from "@tanstack/react-query"
import { useRef, useState } from "react"

export const UseChannelInfo = () => {
    const channelRef = useRef<HTMLAnchorElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [channel, setChannel] = useState<string | undefined>(undefined)
    const [edit, setEdit] = useState<boolean>(false)
    const [icon, setIcon] = useState<string | undefined>(undefined)
    const client = useQueryClient()

    const onEditChannel = (id: string | undefined) => {
        setChannel(id)
        setEdit(true)
    }

    const onSetIcon = (icon: string | undefined) => setIcon(icon)

    const {isPending, mutate, variables } = use
}
