import { onAuthenticatedUser } from "@/actions/auth"
import { onGetAffiliateInfo } from "@/actions/groups"
import { redirect } from "next/dist/server/api-utils"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    const affiliate = await onGetAffiliateInfo(searchParams.affiliate)

    if (!user || !user.id) redirect

    return <div>GroupCreatePage</div>
}

export default GroupCreatePage
