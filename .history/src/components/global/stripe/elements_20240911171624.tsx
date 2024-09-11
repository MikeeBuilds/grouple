"use client"

import { useStripeElements } from "@/hooks/payment"
import { Elements } from "@stripe/react-stripe-js"
import { promise } from "zod"
type StripeElementsProps = {
    children: React.ReactNode
}

export const StripeElements = ({ children }: StripeElementsProps) => {
    const { stripePromise } = useStripeElements()

    return promise

    return <div>{children}</div>
}
