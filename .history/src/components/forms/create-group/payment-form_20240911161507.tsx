import React from "react"

type Props = {
  userId: string
  affiliate: boolean
  stripeId?: string
}

//WIP connect use payments hook
const PaymentForm = ({ affiliate, userId, stripeId }: Props) => {
  return <div>PaymentForm</div>
}

export default PaymentForm
