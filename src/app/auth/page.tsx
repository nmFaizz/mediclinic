import { GoArrowLeft } from "react-icons/go";
import MainContainer from "@/components/mainContainer/MainContainer";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import AuthStep from "@/components/AuthStep/AuthStep";


export default function AuthPage() {
    return (
        <MainContainer isFullScreen={true}>
            <AuthStep />
        </MainContainer>
    )
}