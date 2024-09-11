import { useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

export const useStripeElements = () => {
    const StripePromise = async () =>
        await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
        )

    return { StripePromise }
}

export const usePayments = (
    userId: string,
    affiliate: boolean,
    stripeId?: string,
) => {
    const stripe = useStripe()
    const elements
}
