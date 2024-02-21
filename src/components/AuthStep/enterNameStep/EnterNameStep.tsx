"use client"
import { setUserData } from "@/utils/main"
import { FC } from "react"


export default function EnterNameStep(props: {inputHandler: any}) {
    const { inputHandler } = props

    return (
        <>
            <div className="mt-5">
                <h1 className="font-[700] text-xl mb-4">Enter your name</h1>
                <p className="text-solid-gray text-sm">Input your name to display in dashboard.</p>
            </div>

            <form action=""  className="mt-12">
                <input type="text" placeholder="First name" onChange={(e) => inputHandler(e, 'firstName')} className="block bg-solid-black-sm w-full outline-none px-4 py-2 rounded-md" />
                <input type="text" placeholder="Last name" onChange={(e) => inputHandler(e, 'lastName')} className="block bg-solid-black-sm w-full outline-none px-4 py-2 mt-5 rounded-md" />
            </form>
        </>
    )
}