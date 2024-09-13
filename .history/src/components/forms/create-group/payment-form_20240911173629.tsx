import { usePayments } from "@/hooks/payment"
import React from "react"

type Props = {
  userId: string
  affiliate: boolean
  stripeId?: string
}

const PaymentForm = ({ affiliate, userId, stripeId }: Props) => {
  const {
    onCreateGroup,
    isPending,
    register,
    errors,
    isCategory,
    creatingIntent,
  } = usePayments(userId, affiliate)
  return <div>PaymentForm</div>
}

export default PaymentForm
