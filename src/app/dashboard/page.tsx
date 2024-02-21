import MainContainer from "@/components/mainContainer/MainContainer"
import { PiBellRingingLight } from "react-icons/pi";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";
import QuickCommands from "@/components/quickCommands/QuickCommands";
import ScheduledAppoinments from "@/components/scheduledAppointments/ScheduledAppointments";
import PromotionOfTheMonth from "@/components/promotionsOfTheMonth/PromotionOfTheMonth";
import NavigationBar from "@/components/navigationBar/NavigationBar";


export default function DashboardPage() {

    return (
        <MainContainer isFullScreen={false}>
            <header className="flex justify-between px-3 py-2 items-center bg-solid-black-md">
                <div>
                    <h1 className="text-2xl font-[600]">Mediclinic</h1>
                </div>

                <div>
                    <PiBellRingingLight className="text-3xl" />
                </div>
            </header>

            <div>
                <WelcomeSection />
                <QuickCommands />
                <ScheduledAppoinments />
                <PromotionOfTheMonth />
            </div>

            <NavigationBar />
        </MainContainer> 
    )
}