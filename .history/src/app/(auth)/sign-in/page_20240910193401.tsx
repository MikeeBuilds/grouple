// import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import SignInForm from "@/components/forms/sign-in"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Separator } from "@/components/ui/separator"

const SignInPage = () => {
    return (
        <>
            <h5 className="font-bold text-base text-themeTextWhite text-center ">
                Login
            </h5>
            <ul className="text-themeTextGray leading-tight list-disc pl-5 space-y-2">
                <li>Connect with cannabis professionals worldwide</li>
                <li>Join industry-specific groups and communities</li>
                <li>Access expert-led courses to expand your knowledge</li>
                <li>Elevate your career in the growing cannabis sector</li>
                <li>
                    Cultivate skills, grow your network, and thrive with Cannova
                </li>
            </ul>
            <SignInForm />
            <div className="my-10 w-full relative">
                <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    OR CONTINUE WITH
                </div>
                <Separator orientation="horizontal" className="bg-themeGray" />
            </div>
            <GoogleAuthButton method="signin" />
        </>
    )
}

export default SignInPage
