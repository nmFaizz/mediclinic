import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"

export default function EnterPhoneStep() {
    return (
        <>
            <div className="">
                <h1 className="font-bold text-xl mb-4 mt-5">Enter your phone number</h1>
                <p className="text-[var(--solid-gray)]">Please enter your country code and enter your phone number</p>
            </div>

            <form action="" className="flex mt-12 gap-2 items-center h-[40px]">
                <div className="bg-[var(--solid-black-300)] rounded-md h-full px-2 flex items-center">
                    <div className="w-[20px] h-[15px] mr-[5px]">
                        <Image src='/indonesia.svg'width={900} height={600} alt="indonesia" className="w-full h-full" />
                    </div>
                    <IoIosArrowDown className="" />
                </div>
                <input type="text" placeholder="Your phone number" className="rounded-md outline-none border-none bg-[var(--solid-black-300)] px-4 h-full w-full" />
            </form>
        </>
    )
}