import FAQs from "@/components/FAQs";
import Hero from "@/components/hero/Hero";
import ModelsTable from "@/components/ModelsTable";
import Offers from "@/components/Offers";
import Pricing from "@/components/Pricing";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-12">
      <Hero />
      <Offers />
      <ModelsTable />
      <Pricing />
      <FAQs />
      <div className="flex flex-col px-10 max-sm:px-4 py-10 pt-5 items-center">
        <h3>Ready to build the future of AI in Malawi?</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          Join thousands of developers, researchers, and companies building
          transformative AI applications.
        </p>
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
    </main>
  );
}
