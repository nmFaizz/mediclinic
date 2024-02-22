"use client"
import { GoArrowLeft } from "react-icons/go"
import EnterCodeStep from "./enterCodeStep/EnterCodeStep"
import EnterNameStep from "./enterNameStep/EnterNameStep"
import { ChangeEvent, useState } from "react"
import { setUserData } from "@/utils/main"
import type { User } from "@/utils/main"
import EnterPhoneStep from "./enterPhoneStep/EnterPhoneStep"
import { useRouter } from "next/navigation"

export default function AuthStep() {
    const [name, setName] = useState<User>({
        firstName: '',
        lastName: '',
    })
    const [stepIndex, setStepIndex] = useState<number>(0)
    const route = useRouter()
 
    const inputHandler = (e: ChangeEvent<HTMLFormElement>, inputName: string) => {
        if (inputName === 'firstName') {
            setName(prev => ({ ...prev, firstName: e.target.value}))
        } else if (inputName === 'lastName') {
            setName(prev => ({ ...prev, lastName: e.target.value }))
        }
    }

    const stepsComponent = [
        {
            id: 1,
            comp: <EnterPhoneStep />
        },
        {
            id: 2,
            comp: <EnterCodeStep />
        },
        {
            id: 3,
            comp: <EnterNameStep inputHandler={inputHandler} />
        },
    ]

    const stepIndexHandler = (prev: number, navigation: string) => {
        let result = 0

        if (navigation === 'continue') {
            result = prev + 1
        } else if (navigation === 'back') {
            result =  prev - 1
        }

        if (result > 2) {
            result = 2

            setTimeout(() => {
                result = 0
            }, 1000)
            
            route.push('/home')
        } else if (result < 0) {
            result = 0
            route.push('/')
        }

        return result
    }

    

    return (
        <div className="flex flex-col px-4 justify-between h-full">
            <div className="">
                <header className="py-5">
                    <button onClick={() => setStepIndex(prev => stepIndexHandler(prev, 'back'))}>
                        <GoArrowLeft className="text-2xl" />
                    </button>
                </header>
                {stepsComponent[stepIndex].comp}
            </div>

            <button onClick={() => { setUserData(name); setStepIndex(prev => stepIndexHandler(prev, 'continue'))}} className="bg-solid-blue w-full rounded-md py-2 text-center mb-8">
                <p className="font-[600]">Continue</p>
            </button>
        </div>
    )
}

