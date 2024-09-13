import React from "react"

type Props = {
  userId: string
  affiliate: boolean
  stripeId?: string
}
const PaymentForm = ({ affiliate, userId, stripeId }: Props) => {
  return <div>PaymentForm</div>
}

export default PaymentForm
