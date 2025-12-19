import airtel from "@/public/airtel.png";
import tnm from "@/public/tnm.png";
import centenary from "@/public/centenary.png";
import Image from "next/image";

function PaymentMethods() {
  return (
    <div className="w-full grid-cols-3 grid gap-2">
      <div className="flex flex-col items-center relative justify-center p-2 cursor-pointer aspect-video border border-black/10 rounded-(--radius-s)">
        <Image className="h-10 w-10 mb-1.5" src={tnm} alt="TNM mpamba" />

        <span className="font-p3 opacity-75">TNM Mpamba</span>
      </div>
      <div className="flex flex-col items-center relative justify-center p-2 cursor-pointer aspect-video border border-black/10 rounded-(--radius-s)">
        <Image className="h-10 w-10 mb-1.5" src={airtel} alt="airtle money" />

        <span className="font-p3 opacity-75">Airtel Money</span>
      </div>

      <div className="flex flex-col items-center relative justify-center p-2 cursor-pointer aspect-video border border-black/10 rounded-(--radius-s)">
        <Image
          className="h-10 w-10 mb-1.5"
          src={centenary}
          alt="airtle money"
        />

        <span className="font-p3 opacity-75">Instant Bank transfer</span>
      </div>
    </div>
  );
}

export default PaymentMethods;
