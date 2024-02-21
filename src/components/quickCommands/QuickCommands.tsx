import Image from "next/image"
import Link from "next/link"

export default function QuickCommands() {

    return (
        <div className="px-3 mt-8">

            <div className="py-2">
                <p className="text-md font-[600]">Quick Commands</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="bg-solid-black-sm rounded-md h-[90px] col-span-2 p-2 flex overflow-hidden">
                    <div className="flex flex-col justify-end h-full flex-1">
                        <p className="font-[600]">Make an appointment</p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="h-[100px] w-[100px] absolute top-[-20px] right-[-20px]">
                            <Image 
                                src='/calendar.webp'
                                width={100}
                                height={100}
                                alt="calendar"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-solid-blue rounded-md h-[90px] flex p-2 overflow-hidden">
                    <div className="flex flex-col justify-end h-full flex-1">
                        <p className="font-[600]">View reports</p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="h-[100px] w-[100px] absolute top-[-30px] right-[-30px]">
                            <Image 
                                src='/note.webp'
                                width={100}
                                height={100}
                                alt="calendar"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                <Link href='/emergency' className="bg-red-500 rounded-md h-[90px] flex overflow-hidden p-2">
                    <div className="flex flex-col justify-end h-full flex-1">
                        <p className="font-[600]">Emergency</p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="h-[110px] w-[110px] absolute top-[-40px] right-[-30px]">
                            <Image 
                                src='/ambulance.webp'
                                width={100}
                                height={100}
                                alt="calendar"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </Link>

                <div className="bg-solid-black-sm rounded-md h-[90px] col-span-2 flex overflow-hidden p-2">
                    <div className="flex flex-col justify-end h-full flex-1">
                        <p className="font-[600]">Schedule an online appointment</p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="h-[100px] w-[100px] absolute top-[-20px] right-[-20px]">
                            <Image 
                                src='/message.webp'
                                width={100}
                                height={100}
                                alt="calendar"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}