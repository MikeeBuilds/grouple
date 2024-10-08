"use server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript: true,
  api,
})

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
    return { status: 400, message: "Failed to load form " }
  }
}
