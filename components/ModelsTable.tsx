import offersImage from "@/public/offers-images.png";
import Image from "next/image";

function ModelsTable() {
  return (
    <div className="flex flex-col px-10 max-sm:px-4 py-10 space-y-10">
      <div className="flex flex-col items-center">
        <h3>Active AI Models</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          All models you need in one place. Browse and compare to see what's
          best for your use case
        </p>
      </div>
    </div>
  );
}

export default ModelsTable;
