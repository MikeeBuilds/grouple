import React from "react"

type Props = {
  userId: string
  affiliate: boolean
  stripeId?: string
}
const PaymentForm = ({ affiliate, userId, StripeId }: Props) => {
  return <div>PaymentForm</div>
}

export default PaymentForm
