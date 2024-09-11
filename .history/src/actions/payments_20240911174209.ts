"use server"

export const onGetStripeClientSecret = async () => {
    try {
        const paymentIntent = await StripeElements.paymentIntents.create({
            currency: "usd",
            amount: 9900,
            automatic_payment_methods: {
                enabled: true,
            },
        })
    }
}