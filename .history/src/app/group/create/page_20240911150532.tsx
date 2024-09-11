import { onAuthenticatedUser } from "@/actions/auth"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    const

    return <div>GroupCreatePage</div>
}

export default GroupCreatePage
