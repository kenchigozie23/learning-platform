import { SignIn } from "@clerk/nextjs/app-beta";

const Page = async ({searchParams}) => {
    const {redirectUrl} = searchParams
    return (
        <div className="flex h-screen w-full justify-center items-center">
            <SignIn redirectUrl={redirectUrl || '/'}/>
        </div>
    )
}

export default Page