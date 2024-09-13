import { onAuthenticatedUser } from "@/actions/auth"
import { onGetAffiliateInfo } from "@/actions/groups"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { User } from "lucide-react"
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
          Start your 14-day free trial. No credit card required.
        </p>
        {affiliate.status === 200 && (
          <div className="w-full mt-5 flex justify-center gap-x-2 italic text-themeGray text-sm">
            You were reffered by
            <Avatar>
              <AvatarImage
                src={affiliate.user?.Group?.User.image as string}
                alt="User"
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            {affiliate.user?.Group?.User.firstname}{" "}
            {affiliate.user?.Group?.User.lastname}
          </div>
        )}
        <CreateGroup userId={user.id} affiliate={affiliate.status === 200} />
      </div>
    </>
  )
}

export default GroupCreatePage
