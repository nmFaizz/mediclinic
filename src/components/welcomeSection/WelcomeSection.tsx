"use client"
import { getUserData } from "@/utils/main"
import { useState, useEffect } from "react"
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

export default function WelcomeSection() {
    const [username, setUsername] = useState({
        firstName: '',
        lastName: ''
    })

    useEffect(() => {
        setUsername(prev => ({ ...prev, ...getUserData()}))
    }, [])

    return (
        <div className="bg-solid-black-md px-3 py-2 rounded-b-xl">
            <div className="flex">
                <div className="h-full flex-1 py-4">
                    <h1 className="text-solid-blue font-[700] text-4xl line-clamp-2">Hello, Nicolete</h1>
                    <p className="font-[600]">Let&apos;s find everything you need</p>
                </div>

                <div className="flex-1 h-full w-full">
                    <Image 
                        src='/doctor-vector.svg'
                        width={620}
                        height={720}
                        alt="doctor-vector"
                        className="w-full h-full mb-[-10px]"
                    />
                </div>
            </div>

            <div className="w-full flex px-2 items-center bg-solid-black-sm rounded-md text-solid-gray mb-3">
                <CiSearch className="text-3xl" />
                <input type="text" className="text-md outline-none bg-solid-black-sm w-full px-3 py-3 rounded-4xl" placeholder="Search for a doctor, clinic, analysis, etc." />
            </div>
        </div>        
    )
}