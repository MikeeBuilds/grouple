"use client"

import { Elements } from "@stripe/react-stripe-js"
type StripeElementsProps = {
  children: React.ReactNode
}

export const StripeElements = ({ children }: StripeElementsProps) => {
  const { stripePromise } = useStripeElem()

  return <div>{children}</div>
}
