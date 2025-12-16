"use client";

import {
  IconChevronDown,
  IconChevronRight,
  IconMenu,
} from "@tabler/icons-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed w-screen top-0 left-0 px-10 py-6 flex items-center justify-center">
      <Link href={"/"} className="font-semibold font-h4  ">
        Otowa
      </Link>

      <div className="flex items-center max-[720px]:hidden absolute space-x-4">
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
        <Link className="font-medium" href={"/"}>
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <Link className="font-semibold max-[720px]:hidden" href={"#"}>
          Login
        </Link>

        <Link href={"/contact"} className="cta">
          Get started
          <IconChevronRight
            color="var(--white)"
            className="h-4 w-4 opacity-75"
          />
        </Link>

        <button className="cta-2 ml-auto min-[720px]:hidden">
          <IconMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
