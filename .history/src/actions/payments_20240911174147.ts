"use server"

export const onGetStripeClientSecret = async () => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        })
    }
}