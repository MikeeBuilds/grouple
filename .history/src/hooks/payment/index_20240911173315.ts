import { CreateGroupSchema } from "@/components/forms/create-group/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { set } from "date-fns"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    const [isCategory, setIsCategory] = useState<string | undefined>(undefined)

    const stripe = useStripe()
    const elements = useElements()

    const {
        reset,
        handleSubmit,
        formState: { errors },
        register,
        watch,
    } = useForm<z.infer<typeof CreateGroupSchema>>({
        resolver: zodResolver(CreateGroupSchema),
        defaultValues: {
            category: "",
        }
    })

    useEffect(() => {
        const category = watch(({ category } => {
            setIsCategory(category)
        })
    })
        }
    })

}
