import { FC } from "react"
import QuickCommands from "../quickCommands/QuickCommands"
import { IoGridOutline } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { AiOutlineIdcard } from "react-icons/ai";
import { PiHeartbeatLight } from "react-icons/pi";
import { LuUserSquare } from "react-icons/lu";


export default function NavigationBar() {
    
    const navigations = [
        {
            id: 1,
            name: 'Main',
            icon: <IoGridOutline className="text-2xl" />,
            path: ''
        },
        {
            id: 2,
            name: 'Clinic',
            icon: <CiHospital1 className="text-2xl" />,
            path: ''
        },
        {
            id: 3,
            name: 'Medcard',
            icon: <AiOutlineIdcard className="text-2xl" />,
            path: ''
        },
        {
            id: 4,
            name: 'Journal',
            icon: <PiHeartbeatLight className="text-2xl" />,
            path: ''
        },
        {
            id: 5,
            name: 'Profile',
            icon: <LuUserSquare className="text-2xl" />,
            path: ''
        },
    ]
    
    return (
        <nav className="sticky pb-8 flex justify-evenly items-center bottom-0 left-0 w-full pt-3 rounded-t-[25px] bg-solid-black-lg">
            {navigations.map(nav => 
                <div key={nav.id} className="flex hover:text-solid-blue text-solid-gray flex-col justify-center items-center">
                    {nav.icon}
                    <p>{nav.name}</p>
                </div>
            )}
        </nav>
    )
}