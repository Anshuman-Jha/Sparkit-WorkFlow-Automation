"use client"
import { Appbar } from "@/components/Appbar";
import { Darkbutton } from "@/components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, Hooks_URL } from "../config";
import { LinkButton } from "@/components/buttons/LinkButtons";
import { useRouter } from "next/navigation";

interface Spark {
    id: string,
    triggerId: string,
    userId: string,
    actions: {
        id: string,
        sparkId: string,
        actionId: string,
        sortingOrder: number,
        type: {
            id: string,
            name: string,
            image: string
        }
    }[],
    trigger: {
        id: string,
        zapId: string,
        triggerId: string,
        type: {
            id: string,
            name: string,
            image: string
        }
    }
}

function useSparks() {
    const [loading, setLoading] = useState(true);
    const [sparks, setSparks] = useState<Spark[]>([]);

    useEffect(() => { // in get request have to pass token in headers
        // request made at first only once when component is mounted
        axios.get(`${BACKEND_URL}/api/v1/spark`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then(res => {
            setSparks(res.data.sparks);
            setLoading(false);
        })
    }, []);

    return {
        loading, sparks
    }

}

export default function Dashboard() {

    const { loading, sparks } = useSparks();
    const router = useRouter();
    return (
        <div>
            <Appbar />
            <div className="flex justify-center pt-8">
                <div className="max-w-screen-lg w-full">
                    <div className="flex justify-between pr-8">
                        <div className="text-2xl font-bold">
                            My Sparks
                        </div>
                        <Darkbutton onClick={() => {
                            router.push("/spark/create")
                        }} size="small">
                            Create
                        </Darkbutton>
                    </div>
                </div>
            </div>
            {loading ? "loading..." : <div className="flex justify-center"> <SparkTable sparks={sparks} />
            </div>}
        </div>
    )
}

function SparkTable({ sparks }: { sparks: Spark[] }) {

    const router = useRouter();

    return (
        <div className="p-8  max-w-screen-lg w-full">
            <div className="flex">
                <div className="flex-1">Name</div>
                <div className="flex-1">ID</div>
                <div className="flex-1">Created At</div>
                <div className="flex-1">Webhook URL</div>
                <div className="flex-1">Go</div>
            </div>

            {sparks.map(s => <div className="flex border-b border-t py-4 ">
                <div className="flex-1 flex"><img src={s.trigger.type.image} className="w-[30px] h-[30px]" />  {s.actions.map(x =>
                    <img src={x.type.image} className="w-[30px] h-[30px]" />)}</div>
                <div className="flex-1">{s.id}</div>
                <div className="flex-1">Nov 24 2025</div>
                <div className="flex-1">{`${Hooks_URL}/hooks/catch/${s.userId}/${s.id}`} </div>
                <div className="flex-1"> <LinkButton onClick={() => {
                    router.push("/spark/" + s.id)
                }}>  Go </LinkButton> </div>
            </div>)}

        </div>
    )

}