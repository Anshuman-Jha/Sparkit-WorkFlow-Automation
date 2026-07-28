"use client"
import { Appbar } from "@/components/Appbar"
import { useEffect, useState } from "react";
import { SparkCell } from "@/components/SparkCell";
import { LinkButton } from "@/components/buttons/LinkButtons";
import { PrimaryButton } from "@/components/buttons/Primarybutton";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { Input } from "@/components/input"
import { metadata } from "@/app/layout";


// custom hook for available actions and available triggers
type AvailableItems = {
    id: string;
    name: string;
    image: string
};
function useAvailableActionsAndTriggers() {

    const [availableActions, setAvailableActions] = useState<AvailableItems[]>([]);
    const [availableTriggers, setAvailableTriggers] = useState<AvailableItems[]>([]);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/trigger/available`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((s) => {
            setAvailableTriggers(s.data.availableTriggers);
        })

        axios.get(`${BACKEND_URL}/api/v1/action/available`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((s) => {
            setAvailableActions(s.data.availableActions);
        })

    }, []);
    // return value of 2 set state variables
    return {
        availableActions,
        availableTriggers
    };

};

// component used to create spark and render it
export default function Create() {

    const { availableActions, availableTriggers } = useAvailableActionsAndTriggers();
    const [selectedTrigger, setSelectedTrigger] = useState<{
        id: string,
        name: string
    }>();
    const [selectedActions, setSelectedActions] = useState<{ // array of object
        index: number,
        availableActionId: string,
        availableActionName: string,
        metadata: any
    }[]>([]);
    const [selectedModalIndex, setSelectedModalIndex] = useState<null | number>(null);
    const router = useRouter();
    return (
        <div>
            <Appbar />
            <div className="flex justify-end bg-slate-200 p-4">
                <PrimaryButton onClick={async () => {

                    if (!selectedTrigger?.id) {
                        return;
                    }

                    const response = await axios.post(`${BACKEND_URL}/api/v1/spark`, {
                        availableTriggerId: selectedTrigger?.id,
                        triggerMetadata: {},
                        actions: selectedActions.map(a => ({
                            availableActionId: a.availableActionId,
                            actionMetadata: a.metadata
                        }))
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })

                    router.push("/dashboard");

                }}> Publish </PrimaryButton>
            </div>
            <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center justify-center cursor-pointer pt-[-40px]">
                <div className="flex justify-center w-full">
                    <SparkCell name={selectedTrigger?.name ? selectedTrigger.name : "Trigger"} index={1} onClick={() => {
                        setSelectedModalIndex(1);
                    }} />
                </div>
                <div className="w-full pt-2 pb-2" >
                    {selectedActions.map((action, index) => <div key={index} className="pt-2 flex justify-center">
                        <SparkCell name={action.availableActionName ? action.availableActionName : "Action"} index={action.index} onClick={() => {
                            setSelectedModalIndex(action.index);
                        }} />
                    </div>)}
                </div>
                <div className="flex justify-center">
                    <div>
                        <PrimaryButton onClick={() => {
                            setSelectedActions(a => [...a, {
                                index: a.length + 2,
                                availableActionId: "",
                                availableActionName: "",
                                metadata: {}
                            }]);
                        }}>
                            <div className="text-2-xl max-w-2">
                                +
                            </div></PrimaryButton>
                    </div>
                </div>
            </div>
            {
                selectedModalIndex && <Modal index={selectedModalIndex} availableItems={selectedModalIndex == 1 ? availableTriggers : availableActions} onSelect={(props: null | { name: string, id: string, metadata: any }) => {
                    if (props == null) {
                        setSelectedModalIndex(null);
                        return;
                    }
                    if (selectedModalIndex === 1) {
                        setSelectedTrigger({
                            id: props.id,
                            name: props.name
                        })
                    }
                    else {
                        setSelectedActions(a => {
                            let newActions = [...a];
                            newActions[selectedModalIndex - 2] = {
                                index: selectedModalIndex,
                                availableActionId: props.id,
                                availableActionName: props.name,
                                metadata: props.metadata
                            };
                            return newActions;
                        })
                    }
                }} />
            }
        </div >
    )

}
// model which will open and will show suggestions => 2 types 
// identify simply by index without tyoe => starts from 1=>Trigger else Action
function Modal({ index, onSelect, availableItems }: {
    index: number,
    onSelect: (props: null | { name: string, id: string, metadata: any }) => void,
    availableItems: AvailableItems[]

}) {
    const [selectedActions, setSelectedActions] = useState<{
        id: string,
        name: string
    }>();
    const [step, setStep] = useState(0); // initially at 0th step => selecting action/trigger

    const isTrigger = index === 1;

    return (
        <div>
            <div id="default-modal" className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-100 bg-opacity-70 flex">
                <div className="relative p-4 w-full max-w-2xl max-h-full">

                    <div className="relative bg-white rounded-lg shadow">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <div>

                            </div>
                            <div className="text-xl">
                                Select {index === 1 ? "Trigger" : "Action"}
                            </div>
                            <button onClick={() => {
                                onSelect(null); // Null initial value of props filed of object
                            }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {step === 1 && selectedActions?.id === "email" && <EmailSelector setMetadata={(metadata) => {
                            onSelect({
                                ...selectedActions,
                                metadata
                            })
                        }} />}

                        {step === 1 && selectedActions?.id === "send-sol" && <SolanaSelector setMetadata={(metadata) => {
                            onSelect({
                                ...selectedActions,
                                metadata
                            })
                        }} />}

                        <div className="p-4 md:p-5 space-y-4">

                            {step === 0 && <div>{availableItems.map(({ id, name, image }) => {
                                return <div key={id}
                                    onClick={() => {
                                        if (isTrigger) {
                                            onSelect({
                                                id: id,
                                                name: name,
                                                metadata: {}
                                            })
                                        }
                                        else {
                                            setStep(s => s + 1); // we go to ext step about metadata for actions
                                            setSelectedActions({
                                                id,
                                                name
                                            })
                                        }
                                    }} className="flex border p-4 cursor-pointer hover:bg-slate-100">
                                    <img src={image} width={30} className="rounded-full" />
                                    <div className="flex flex-col justify-center">
                                        {name}
                                    </div>
                                </div>
                            })} </div>}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}
// want to render these two inside modal component (inside return) 
// Define Separetely / how they render => just pass props Inside return of Modal
function EmailSelector({ setMetadata }: { setMetadata: (params: any) => void }) {

    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    return (
        <div>
            <Input label={"To"} type={"text"} placeholder="To" onChange={(e) => { setEmail(e.target.value) }}></Input>
            <Input label={"Body"} type={"text"} placeholder="Body" onChange={(e) => { setBody(e.target.value) }}></Input>
            <div className="pt-2">
                <PrimaryButton onClick={() => {
                    setMetadata({
                        email,
                        body
                    })
                }}> Submit </PrimaryButton>
            </div>
        </div>
    )
}
function SolanaSelector({ setMetadata }: { setMetadata: (params: any) => void }) {

    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <div>
            <Input label={"To"} type={"text"} placeholder="To" onChange={(e) => { setAddress(e.target.value) }}></Input>
            <Input label={"Amount"} type={"text"} placeholder="Amount" onChange={(e) => { setAmount(e.target.value) }}></Input>
            <div className="pt-4">
                <PrimaryButton onClick={() => {
                    setMetadata({
                        amount,
                        address
                    })
                }}>Submit</PrimaryButton>
            </div>
        </div>
    )
}