"use client"

import { useStripeElements } from "@/hooks/payment"
import { Elements } from "@stripe/react-stripe-js"
type StripeElementsProps = {
    children: React.ReactNode
}

export const StripeElements = ({ children }: StripeElementsProps) => {
    const { stripePromise } = useStripeElements()

    return promis && <Elements stripe={stripePromise}>{children}</Elements>

    return <div>{children}</div>
}
