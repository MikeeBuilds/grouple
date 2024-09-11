"use server"

export const onGetStripeClientSecret = async () => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "usd",
            amount: 99000,
            automatic_payment_methods: {
                enabled: true,
            },
        })
    }
}