import { onAuthenticatedUser } from "@/actions/auth"
import { onGetAffiliateInfo } from "@/actions/groups"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { redirect } from "next/navigation"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    const affiliate = await onGetAffiliateInfo(searchParams.affiliate)

    if (!user || !user.id) redirect("/sign-in")

    return (
        <>
          <div className="px-7 flex flex-col">
            <h5 className="font-bold text-base text-themeTextWhite">
                Payment Method
            </h5>
            <p className="text-themeTextGray leading-light">
                Free for 14 days, Then $99/month. Cancel anytime. All features. Unlimited everything. No hidden fees.
            </p>
            {affiliate.status === 200 && (
                <div className="w-full mt-5 flex justify-center gap-x-2 italic text-themeGray text-sm">
                    You were reffered by
                    <Avatar>
                        <AvatarImage src={
                            affiliate.user?.Group?. as string
                        }>

                        </AvatarImage>
                    </Avatar>
                </div>
            )}
          </div>
        </>
    )
}

export default GroupCreatePage
