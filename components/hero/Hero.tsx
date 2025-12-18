import heroImage from "@/public/hero-image.png";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "./HeroImage";
import IconClock from "../Icons/IconClock";

function Hero() {
  return (
    <div className="w-full flex max-[900px]:flex-col hero items-center max-[900px]:items-start relative justify-center z-0 bg-[#F2F2F2] py-16 px-10 max-sm:px-4 border-b border-dashed border-b-[#D4D4D4]">
      <div className="flex flex-col space-y-2 max-[900px]:items-center max-[900px]:py-24">
        <span className="font-p3 font-medium bg-white px-2 w-fit py-1 rounded-full border border-[#4D4D4D]/15">
          Malawi’s AI Infrastructure Specialists
        </span>
        <div className="flex flex-col ">
          <h1 style={{ lineHeight: "160%" }} className="w-[17ch]  max-[900px]:text-center max-[900px]:w-full">
            Take advantage of the power of <span>AI.</span>
          </h1>
          <p className="w-60 max-[900px]:w-full max-[900px]:text-center opacity-75">
            We are here to help you fully integrate and deploy AI into your
            business workflow to stay ahead of the competition
          </p>
        </div>

        <div className="flex items-center max-[360px]:flex-col max-[360px]:space-x-0 max-[360px]:space-y-5 max-[360px]:mt-6 space-x-4 mt-4">
          <Link className="cta" href={"/contact"}>
            Get started
            <IconChevronRight color="var(--white)" className="opacity-75" />
          </Link>
          <Link href={"#"} className="font-semibold flex items-center">
            Check documentation
            <IconChevronRight className="h-4 w-4 ml-1 opacity-75" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col min-[900px]:ml-auto py-20 mr-6 max-[900px]:pt-0">
        {/* <Image src={heroImage} alt="otowa" className="w-[40vw]" /> */}
        <HeroImage />

        <div className="flex items-center space-x-6 max-[526px]::space-x-0 max-[526px]:flex-col max-[526px]:items-start max-[526px]:space-y-6 flex-wrap max-[900px]:mt-4">
          <div className="flex items-center">
            <svg
              width="16px"
              height="16px"
              className="mr-1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--primary)"
              strokeWidth="1.5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6L11.25 12C11.25 12.4142 11.5858 12.75 12 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H12.75L12.75 6Z"
                fill="var(--primary)"
              ></path>
            </svg>
            <span className="font-medium font-p3">Integrate in seconds</span>
          </div>
          <div className="flex items-center">
            <svg
              width="16px"
              height="16px"
              className="mr-1.5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--primary)"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.937 6.06293 22.75 12 22.75C17.937 22.75 22.75 17.937 22.75 12C22.75 6.06293 17.937 1.25 12 1.25ZM12.75 5.5C12.75 5.08579 12.4142 4.75 12 4.75C11.5858 4.75 11.25 5.08579 11.25 5.5V6.60325C10.7348 6.6798 10.2303 6.85793 9.8025 7.18193C9.13016 7.69119 8.75 8.48349 8.75 9.50001C8.75 9.99538 8.86527 10.4357 9.09233 10.8161C9.31679 11.1921 9.62636 11.4694 9.95672 11.6796C10.5694 12.0695 11.3505 12.2823 11.9957 12.4581L12.0527 12.4736C12.772 12.6697 13.3375 12.831 13.738 13.0859C13.9232 13.2038 14.0434 13.3249 14.1197 13.4528C14.1934 13.5763 14.25 13.7454 14.25 14C14.25 14.6092 14.0047 14.9921 13.6458 15.2435C13.2567 15.516 12.681 15.665 12.0269 15.6415C11.0251 15.6055 10.0709 15.1779 9.6 14.55C9.35147 14.2186 8.88137 14.1515 8.55 14.4C8.21863 14.6485 8.15147 15.1186 8.4 15.45C9.06955 16.3427 10.1574 16.875 11.25 17.0647V18.5C11.25 18.9142 11.5858 19.25 12 19.25C12.4142 19.25 12.75 18.9142 12.75 18.5V17.109C13.3777 17.0337 13.9915 16.8327 14.5063 16.4721C15.2634 15.942 15.75 15.1018 15.75 14C15.75 13.5046 15.6347 13.0644 15.4077 12.684C15.1832 12.3079 14.8736 12.0306 14.5433 11.8204C13.9306 11.4305 13.1495 11.2177 12.5043 11.0419L12.5043 11.0419L12.4473 11.0264C11.728 10.8303 11.1625 10.669 10.762 10.4141C10.5768 10.2962 10.4566 10.1751 10.3803 10.0472C10.3066 9.92373 10.25 9.75463 10.25 9.50001C10.25 8.8865 10.4603 8.56541 10.7082 8.37765C10.9874 8.16615 11.4239 8.04349 11.9798 8.05845C12.9286 8.08398 13.9414 8.50209 14.4697 9.03033C14.7626 9.32323 15.2374 9.32322 15.5303 9.03033C15.8232 8.73743 15.8232 8.26256 15.5303 7.96967C14.8479 7.28726 13.7987 6.80659 12.75 6.63088V5.5Z"
                fill="var(--primary)"
              ></path>
            </svg>
            <span className="font-medium font-p3">No forex required</span>
          </div>
          <div className="flex items-center">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--primary)"
              strokeWidth="1.5"
              className="mr-1.5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                fill="var(--primary)"
              ></path>
            </svg>
            <span className="font-medium font-p3">Localized AI models</span>
          </div>
        </div>
      </div>

      <button className="absolute font-p3 h-8 max-[900px]:self-center -bottom-4 bg-[#FAFFFB] border border-[#B2FFC8] px-3 rounded-full text-[#3A7D66] flex items-center">
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#09DE48]"></span>
        12 Active AI models
      </button>
    </div>
  );
}

export default Hero;
