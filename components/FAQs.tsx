"use client";

import { motionTransition } from "@/utils/motion-transition";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What are the benefits of adopting AI?",
    answer:
      "AI can boost productivity and accuracy, automate repetitive tasks, surface actionable insights from data, personalize customer experiences, and help you scale operations more efficiently. Many teams also find it reduces time-to-decision and operational costs over time.",
  },
  {
    id: 2,
    question: "Is there a yearly subscription plan?",
    answer:
      "Yes — we offer both monthly and yearly subscription plans. Yearly plans typically include a discount compared to month-to-month billing, and may include additional perks such as priority support or extra usage credits.",
  },
  {
    id: 3,
    question: "How do you handle customer support in case of issues?",
    answer:
      "Support is provided through multiple channels: in-app chat, email, and an online help center with guides and FAQs. Higher-tier plans include faster SLA response times and a dedicated account manager for critical issues.",
  },
  {
    id: 4,
    question: "Do you offer automation?",
    answer:
      "Yes — we provide automation tools and APIs to integrate AI workflows into your existing systems. You can create scheduled jobs, triggers, and pipelines to automate tasks like data processing, model inference, and notifications.",
  },
  {
    id: 5,
    question: "How do you handle sensitive data security and privacy?",
    answer:
      "We take data security seriously: data is encrypted in transit and at rest, access is role-based, and activity is logged. We follow industry best practices for security and offer options such as data isolation and on-prem or private cloud deployments where required.",
  },
  {
    id: 6,
    question: "How do you manage AI credits for your customers?",
    answer:
      "AI usage is tracked in a customer dashboard where admins can view balance, consumption history, and cost estimates. Credits can be purchased or auto-replenished, and you can set usage limits or alerts to control spending.",
  },
  {
    id: 7,
    question: "Is Otowa AI only available in Malawi?",
    answer:
      "Otowa AI was founded with a focus on Malawi but is available to customers in multiple regions. Availability of certain features or deployments may vary by region — contact sales for the most up-to-date regional availability and options.",
  },
];

type Question = {
  id: number;
  question: string;
  answer: string;
};

function FAQs() {
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  return (
    <div id="faqs" className="flex flex-col px-10 max-sm:px-4 py-10 space-y-10">
      <div className="flex flex-col items-center">
        <h3>FAQs</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          Get quick answers to question you would likely have
        </p>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="w-165 mx-auto max-sm:w-full p-3 space-y-1 rounded-(--radius-m) border border-(--border)"
        >
          {faqs.map((q) => (
            <motion.div
              key={q.id}
              layout="position"
              onClick={() => {
                if (q.id == activeQuestion?.id) {
                  setActiveQuestion(null);
                } else {
                  setActiveQuestion(q);
                }
              }}
              transition={motionTransition()}
              className="flex flex-col  py-3 first:pt-0 last:pb-0 last:border-0 border-b border-b-(--border) "
            >
              <div className="w-full gap-2  cursor-pointer grid grid-cols-[1fr_auto]">
                <p className="font-medium">{q.question}</p>
                <IconChevronDown
                  style={{
                    transition: "ease 0.35s",
                  }}
                  className={`h-4 w-4 opacity-50 ${
                    activeQuestion == q ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {q.id == activeQuestion?.id && (
                <motion.p
                  transition={motionTransition()}
                  layout="position"
                  className="opacity-75 font-normal mt-0.5"
                >
                  {q.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default FAQs;
