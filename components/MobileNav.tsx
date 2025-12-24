"use client";

import { IconChevronRight, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { motionTransition } from "@/utils/motion-transition";
import { deleteUrlParam } from "@/utils/url-functions";

function MobileNav() {
  const [open, setOpen] = useState(true);
  const searchParams = useSearchParams();
  const state = searchParams.get("mobile-navigation");

  useEffect(() => {
    if (state && state == "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [state]);

  return (
    <>
      {open && (
        <div onClick={() => deleteUrlParam("mobile-navigation")} className="flex fixed z-100 h-screen w-screen bg-black/10 left-0 top-0 flex-col p-4"></div>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={motionTransition()}
            className="flex fixed z-101 h-screen w-[75vw] bg-white right-0 top-0 flex-col p-4"
          >
            <div className="flex items-center w-full">
              <span className="font-semibold font-h4">Otowa</span>
              <button
                onClick={() => deleteUrlParam("mobile-navigation")}
                className="flex items-center ml-auto p-1.5 bg-black/5 border border-black/10 rounded-[0.35rem]"
              >
                <IconX className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 my-10">
              <Link onClick={() => deleteUrlParam("mobile-navigation")} className="font-medium" href={"/"}>
                Home
              </Link>
              <Link onClick={() => deleteUrlParam("mobile-navigation")} className="font-medium" href={"/"}>
                Contact 
              </Link>
              <Link onClick={() => deleteUrlParam("mobile-navigation")} className="font-medium" href={"/"}>
                Developers
              </Link>
            </div>

            <Link href="/#pricing" className="cta">
              Get started
              <IconChevronRight
                color="var(--white)"
                className="h-4 w-4 opacity-75"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
