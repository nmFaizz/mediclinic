import Image from "next/image";
import Link from "next/link";
import MainContainer from "@/components/mainContainer/MainContainer"; 

export default function GetStartedPage() {
  return (
    <MainContainer isFullScreen={true}>
      <Image 
            src='/host-lobby.jpg'
            width={720}
            height={850}
            alt="..."
            className="h-full w-full object-cover brightness-75"
          />
          
        <div className="absolute top-0 w-full h-full">
          <div className="h-[60%] flex justify-center items-center">
            <div className="">
              <p className="text-center text-lg tracking-wider">Welcome to</p>
              <h1 className="font-bold text-4xl text-center tracking-widest">MEDICLINIC</h1>
            </div>
          </div>

          <div className="rounded-t-[15px] h-[40%] px-3 py-8 bg-solid-black-md">
            <div className="leading-10">
              <p className="font-[600] text-2xl">Get started</p>
              <p className="text-solid-gray">Please select a method to login to the app</p>
            </div>


            <div className="flex flex-col mt-8">
              <Link href='/auth' className="text-center rounded-md py-3 bg-solid-blue">
                <p className="font-[600]">Continue by phone number</p>
              </Link>

              <Link href='/' className="text-center text-solid-blue py-3 mt-3">
                Continue by email
              </Link>
            </div>
          </div>
      </div>
    </MainContainer>
  );
}
