"use client"

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname()

  if(pathname.startsWith("/checkout")){
    return <></>
  }
  return (
    <div className="flex flex-col px-10 max-sm:px-4 min-[1440px]:px-[14vw] py-8 mt-8 border-t border-t-(--border) space-y-5">
      <div className="w-full flex max-sm:flex-col max-sm:gap-10 justify-between">
        <div className="flex flex-col">
          <h3>Otowa</h3>
          <span className="font-normal opacity-75">
            Malawi’s AI Infrastructure Specialists
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Quick Links</span>
          <Link className="opacity-75" href={"/"}>
            Home
          </Link>
          <Link className="opacity-75" href={"#"}>
            Developers
          </Link>
          <Link className="opacity-75" href={"/contact"}>
            Contact us
          </Link>
          <Link className="opacity-75" href={"/#faqs"}>
            FAQs
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Company </span>
          <Link className="opacity-75" href={"#"}>
            About us
          </Link>
          <Link className="opacity-75" href={"#"}>
            Team
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Get started </span>
          <Link className="opacity-75" href={"#"}>
            Contact sales
          </Link>
          <Link className="opacity-75" href={"#pricing"}>
            Pricing
          </Link>
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="flex space-x-2">
          <span className="font-normal">© 2025 Otowa</span>

          <span className="opacity-25">•</span>

          <span className="font-normal opacity-65">Terms</span>

          <span className="opacity-25">•</span>

          <span className="font-normal opacity-65">Privacy</span>
        </div>

        <div className="flex item-center space-x-2 ml-auto mt-6">
          <IconBrandInstagram
            strokeWidth={1.5}
            className="h-5 w-5 opacity-75"
          />
          <IconBrandFacebook strokeWidth={1.5} className="h-5 w-5 opacity-75" />
          <IconBrandX strokeWidth={1.5} className="h-5 w-5 opacity-75" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
