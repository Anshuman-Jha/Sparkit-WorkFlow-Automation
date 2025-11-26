"use client"
import { PrimaryButton } from "./buttons/Primarybutton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { useRouter } from "next/navigation";
import { Feature } from "./Feature";
export const Hero = () => {

    const router = useRouter();

    return (
        <div>
            <div className="flex justify-center">
                <div className="text-5xl font-bold font-semibold text-center pt-8 max-w-lg">
                    Just a Spark_ Automate it all
                </div>
            </div>

            <div className="flex justify-center pt-2">
                <div className="text-xl font-bold font-normal text-center pt-8 max-w-2xl">
                    All you need is a single spark to ignite seamless automation across every app in your business.
                </div>
            </div>

            <div className="flex justify-center pt-4">
                <div className="flex">
                    <PrimaryButton onClick={() => {
                        router.push("/signup");
                    }} size="big">
                        Get Started for free
                    </PrimaryButton>
                    <div className="pl-4">
                        <SecondaryButton onClick={() => { }} size="big">
                            Contact Sales
                        </SecondaryButton>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-4">
                <Feature title={"Free Forever"} subtitle={"for core features"} />
                <Feature title={"More apps"} subtitle={"than any other platform"} />
                <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
            </div>

        </div>
    )

};