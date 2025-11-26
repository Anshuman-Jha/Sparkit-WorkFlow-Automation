"use client"
import { useState } from "react";
import { Appbar } from "@/components/Appbar";
import { CheckFeature } from "@/components/buttons/CheckFeature";
import { PrimaryButton } from "@/components/buttons/Primarybutton";
import { Input } from "@/components/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "../config";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="flex pt-8 max-w-4xl">
                    <div className="flex-1 pt-20 px-4">
                        <div className="font-semibold text-3xl  pb-4">
                            Join millions worldwide who automate there work using Spark_it
                        </div>
                        <div className="pb-6 pt-4">
                            <CheckFeature title={"Easy Setup, no Coding Required !!!"} />
                        </div>
                        <div className="pb-6">
                            <CheckFeature title={"Free Forever in Core Feature"} />
                        </div>
                        <CheckFeature title={"14 day trial of premium feature and apps"} />
                    </div>
                    <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                        <Input label={"Email"} type="text" placeholder="Your Email" onChange={(e) => { setEmail(e.target.value) }}></Input>
                        <Input label={"Password"} type="password" placeholder="Your Password" onChange={(e) => { setPassword(e.target.value) }}></Input>
                        <div className="pt-6">
                            <PrimaryButton size="big" onClick={async () => {
                                const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                                    email: email,
                                    password: password
                                });
                                // if user logged in directly => need to store token in local storage => key-value pair
                                localStorage.setItem("token", res.data.token);
                                router.push("/dashboard");
                            }}>Login</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}