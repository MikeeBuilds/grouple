import { loadStripe } from "@stripe/stripe-js"

export const useStripeElements = () => {
    const StripePromise = async () => await loadStripe(process.en)
}
