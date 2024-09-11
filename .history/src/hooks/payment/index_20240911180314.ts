import { onGetStripeClientSecret } from "@/actions/payments"
import { CreateGroupSchema } from "@/components/forms/create-group/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useMutation, useQuery } from "@tanstack/react-query"
import { set } from "date-fns"
import { useRouter } from "next/router"
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
    const router = useRouter()

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
        },
    })

    useEffect(() => {
        const category = watch(({ category }) => {
            if (category) {
                setIsCategory(category)
            }
        })
        return () => category.unsubscribe()
    }, [watch])

    const { data: Intent, isPending: creatingIntent } = useQuery({
        queryKey: ["payment-intent"],
        queryFn: () => onGetStripeClientSecret(),
    })

    const { mutateAsync: createGroup, isPending } = useMutation({
        mutationFn: async (data: z.infer<typeof CreateGroupSchema>) => {
            if (!stripe || !elements || !Intent) {
                return null
            }

            const { eror}
        }
    })
}
