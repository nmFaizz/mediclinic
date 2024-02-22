import { CiLocationOn } from "react-icons/ci";

export default function ScheduledAppoinments() {
    return (
        <div className="px-3 mt-8">
            <div className="py-2">
                <p className="text-md font-[600]">Scheduled Appoinments</p>
            </div>

            <div className="bg-solid-black-md p-2 rounded-md">
                <div className="border-b-[2px] border-solid-black-sm pb-3">
                    <div className="flex items-center justify-between">
                        <p className="line-clamp-1">12 November 2023, 14:00, Sunday</p>
                        <div className="bg-solid-black-sm rounded-md">
                            <p className="text-yellow-200 text-sm font-[600] px-2 py-[2px]">Therapist</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <CiLocationOn />
                        <p className="text-solid-gray">Mediclinic Indonesi Mall</p>
                    </div>
                </div>

                <div className="mt-3 mb-5">
                    <p className="text-solid-gray"><span className="text-solid-white font-[600]">Doctor:</span> Markova Stefania</p>
                    <p className="text-solid-gray"><span className="text-solid-white font-[600]">Patient:</span> Nicolette Weiss</p>
                </div>

                <button className="text-center hover:bg-solid-blue hover:text-solid-white mb-4 font-[600] text-solid-blue py-2 w-full border-[1px] border-solid-blue rounded-[12px]">
                    View details
                </button>
            </div>
        </div>
    )
}