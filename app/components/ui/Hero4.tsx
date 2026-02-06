import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { UseCaseCard } from "./UsecaseCard";

export function Hero4() {
  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto">

      <div className="text-center">
        <p className="text-[#0B71DA] font-medium">SECURITY AND COMPLIANCE</p>
        <div className="text-5xl tracking-tighter mt-5">
          Enterprise-Grade Protection for Your Business
        </div>
        <div className="text-md text-gray-500 mt-5">
          Our platform is designed to meet the highest industry standards,
          ensuring your transactions, customer data, and financial <br />{" "}
          operations remain secure and fully compliant with global regulations.
        </div>
      </div>

      <div className="flex flex-row justify-between gap-20 mt-10">
        <div>
          <img src="/features.png" alt="" className="h-150" />
        </div>
        <div className="mt-20">
          <img src="/vektor.png" alt="" className="h-100" />
        </div>
      </div>

      <div className="mt-20">
        <img src="/logos.png" alt="" />
      </div>
    </div>
  );
}
