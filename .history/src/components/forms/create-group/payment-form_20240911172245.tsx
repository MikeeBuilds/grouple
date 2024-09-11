import React from "react"

type Props = {
    userId: string
    affiliate: boolean
    stripeId?: string
}

//WIP connect use payments hook
const PaymentForm = ({ affiliate, userId, stripeId }: Props) => {
    const {
        onCreateGroup,
        isPending,
        register,
        
    }
}

export default PaymentForm
