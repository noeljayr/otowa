"use client";

import { setUrlParam } from "@/utils/url-functions";
import {
  IconChevronDown,
  IconChevronRight,
  IconMenu,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/checkout")) {
    return <></>;
  }
  return (
    <div className="fixed w-screen bg-[#F2F2F2] z-50 top-0 left-0 px-10 max-sm:px-4 min-[1440px]:px-[14vw] py-6 flex items-center justify-center">
      <Link href={"/"} className="font-semibold font-h4  ">
        Otowa
      </Link>

      <div className="flex items-center max-[720px]:hidden absolute space-x-6">
        <Link className="font-medium" href={"/"}>
          Home
        </Link>
        <Link className="font-medium" href={"/"}>
          Developers
        </Link>
        <Link className="font-medium flex items-center space-x-1" href={"/"}>
          <span>Company</span>
          <IconChevronDown className="h-4 w-4 opacity-75" />
        </Link>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <Link className="font-semibold max-[720px]:hidden" href={"/contact"}>
          Contact sales
        </Link>

        <Link href="/#pricing" className="cta">
          Get started
          <IconChevronRight
            color="var(--white)"
            className="h-4 w-4 opacity-75"
          />
        </Link>

        <div className="min-[720px]:hidden">
          <button
            onClick={() => setUrlParam("mobile-navigation", "true")}
            className="p-1.5 rounded-[0.35rem] ml-auto bg-black/5 border border-black/10"
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
