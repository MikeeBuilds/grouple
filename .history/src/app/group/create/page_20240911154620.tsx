import { onAuthenticatedUser } from "@/actions/auth"
import { onGetAffiliateInfo } from "@/actions/groups"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    const affiliate = await onGetAffiliateInfo(searchParams.affiliate)

    if (user) return <div>GroupCreatePage</div>
}

export default GroupCreatePage
