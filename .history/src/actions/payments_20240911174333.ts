"use server"

export const onGetStripeClientSecret = async () => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "usd",
            amount: 9900,
            automatic_payment_methods: {
                enabled: true,
            },
        })

        if (paymentIntent.client_secret) {
            return paymentIntent.client_secret
        }
    } catch (error) {
        return { status: 400, message: "" }
    }
}
