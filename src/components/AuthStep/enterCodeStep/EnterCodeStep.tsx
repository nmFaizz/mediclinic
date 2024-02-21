import { GoArrowLeft } from "react-icons/go"
import Link from "next/link"


export default function EnterCodeStep() {
    return (
        <>
            <div className="mt-5">
                <h1 className="font-[700] text-xl mb-4">Enter code</h1>
                <p className="text-solid-gray text-sm">We have sent you an SMS with the code to:</p>
                <p className="text-sm mt-1">+62 132 312 988</p>
            </div>

            <div className="flex justify-center">

                <div className="flex justify-evenly w-[90%] h-[80px] mt-12 items-center">
                    <p className="text-4xl font-[700]">8</p>
                    <p className="text-4xl font-[700]">7</p>
                    <p className="text-4xl font-[700]">2</p>
                    <span className="rounded-full w-[20px] h-[20px] bg-solid-black-sm"></span>
                </div>
            </div>


            <p className="text-center mt-5 text-sm text-solid-gray">Resend code</p>
        </>
    )
}