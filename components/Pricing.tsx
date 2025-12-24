"use client";

import { IconCheck } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { plans } from "@/data/pricing";
import { formatAmountWithCommas } from "@/utils/formatNumber";

const deployment = [
  {
    deployment: "Cloud",
    benefits:
      "Cloud deployment lets you start immediately without purchasing hardware, scale easily as your business needs change, reduce upfront costs through pay-as-you-go pricing, and access the latest AI technology without worrying about maintenance.",
  },
  {
    deployment: "On-Premise",
    featured: true,
    benefits:
      "On-premise deployment keeps all data within your organization, delivers reliable performance without relying on internet speed, becomes more cost-effective over time for consistent use, and allows full customization to meet your business needs.",
  },
];

function Pricing() {
  const [activeMode, setActiveMode] = useState("inferencing");
  return (
    <div
      id="pricing"
      className="flex bg-[#f5f5f5] mx-auto rounded-(--radius-m) flex-col w-[calc(100%-5rem)] max-sm:w-[calc(100%-4rem)] px-10 max-sm:px-4 py-16 space-y-4"
    >
      <div className="flex flex-col items-center">
        <h3>Choose what works for you</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          Different payment plans for different use cases.
        </p>
      </div>

      <div className=" items-center border w-52 grid grid-cols-2 bg-[#EDEDED] rounded-[0.45rem] border-[#D9D9D9] mx-auto">
        <span
          style={{
            transition: "ease 0.35s",
          }}
          onClick={() => setActiveMode("inferencing")}
          className={`py-1.5 text-center w-full border rounded-[0.45rem] ${
            activeMode == "inferencing"
              ? "bg-white border-[#D9D9D9]"
              : "bg-transparent border-transparent"
          }`}
        >
          Inferencing
        </span>
        <button
          style={{
            transition: "ease 0.35s",
          }}
          onClick={() => setActiveMode("deployment")}
          className={`py-1.5 text-center w-full border rounded-[0.45rem] ${
            activeMode == "deployment"
              ? "bg-white border-[#D9D9D9]"
              : "bg-transparent border-transparent"
          }`}
        >
          Deploying
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        {activeMode == "inferencing" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout="position"
            key={"inferencing"}
            className={`w-200 max-[900px]:w-full  mx-auto border border-black/3 bg-black/1 rounded-(--radius-m) p-1 grid grid-cols-3 max-[750px]:flex max-[750px]:flex-col`}
          >
            {plans.map((p) => (
              <div
                key={p.id}
                className={`flex max-[750px]:w-full rounded-(--radius-m) flex-col ${
                  p.featured ? "bg-black" : ""
                } space-y-2 p-3`}
              >
                <div className="flex items-center w-full">
                  <span
                    className={`font-p1 font-semibold ${
                      p.featured ? "text-white/75" : ""
                    } `}
                  >
                    {p.name}
                  </span>
                  <span
                    className={` ${
                      p.featured ? "text-white/75" : ""
                    } opacity-50 ml-auto`}
                  >
                    K{formatAmountWithCommas(p.price.toFixed(0))}/month
                  </span>
                </div>

                <div className="flex flex-col space-y-1 mt-1 mb-4">
                  {p.features.map((f, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <IconCheck
                        color={p.featured ? "white" : "black"}
                        className="h-4 w-4 opacity-50"
                      />
                      <span
                        className={`font-normal  ${
                          p.featured ? "text-white/75" : ""
                        }`}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  target="_blank"
                  href={`/checkout?plan=${p.name.toLowerCase()}`}
                  className={`w-full flex items-center justify-center text-center p-2 ${
                    p.featured ? "bg-white" : "border border-black/10"
                  } mt-auto font-semibold rounded-(--radius-ss)`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout="position"
            key={"deployment"}
            className={`w-165 max-[900px]:w-full  mx-auto border border-black/3 bg-black/1 rounded-(--radius-m) p-1 grid grid-cols-2 max-[750px]:flex max-[750px]:flex-col`}
          >
            {deployment.map((d) => (
              <div
                className={`flex max-[750px]:w-full rounded-(--radius-m) flex-col ${
                  d.featured ? "bg-black" : ""
                } space-y-2 p-3`}
              >
                <div className="flex items-center w-full">
                  <span
                    className={`font-p1 font-semibold ${
                      d.featured ? "text-white/75" : ""
                    } `}
                  >
                    {d.deployment}
                  </span>
                </div>

                <div className="flex flex-col space-y-1 mt-1 mb-4">
                  <p
                    className={`font-normal ${
                      d.featured ? "text-white/75" : ""
                    }`}
                  >
                    {d.benefits}
                  </p>
                </div>

                <Link
                  target="_blank"
                  href={`mailto:onboarding@otowa.com?subject=${d.deployment} Deployment`}
                  className={`w-full flex items-center justify-center text-center p-2 ${
                    d.featured ? "bg-white" : "border border-black/10"
                  } mt-auto font-semibold rounded-(--radius-ss)`}
                >
                  Contact sales
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Pricing;
