"use client"

import { Elements } from "@stripe/react-stripe-js"
type StripeElementsProps = {
    children: React.ReactNode
}

export const StripeElements = ({ children }: StripeElementsProps) => {

    const { stripePromise } = useStripeEleme()

    return <div>{children}</div>
}
