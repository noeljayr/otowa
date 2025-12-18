import Hero from "@/components/hero/Hero";
import ModelsTable from "@/components/ModelsTable";
import Offers from "@/components/Offers";

export default function Home() {
  return (
    <main className="flex flex-col space-y-12">
      <Hero />
      <Offers />
      <ModelsTable />
    </main>
  );
}
