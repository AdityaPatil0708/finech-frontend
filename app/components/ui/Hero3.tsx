import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { UseCaseCard } from "./UsecaseCard";

export function Hero3() {
  return (
    <div className="pt-12 md:pt-20 pb-12 md:pb-20 px-4 md:px-8 lg:px-0">
      <div className="text-center max-w-7xl mx-auto">
        <p className="text-[#0B71DA] font-medium text-xs md:text-sm">WHO IS IT FOR?</p>
        <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight mt-4 md:mt-5 text-white px-4">
          Financial Solutions for Every Industry
        </div>
        <div className="text-white text-sm md:text-base mt-4 md:mt-5 px-4">
          Our platform empowers you to handle transactions, streamline
          operations, and integrate financial services seamlessly.
        </div>
      </div>

      {/* Use Case Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 justify-center pt-12 md:pt-20 max-w-7xl mx-auto">
        <UseCaseCard imageSrc="./cardComp.png" />
        <UseCaseCard imageSrc="./card2Comp.png" />
        <UseCaseCard imageSrc="./card3Comp.png" />
        <UseCaseCard imageSrc="./card4Comp.png" />
      </div>

      {/* Developer Tools Section */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-[300px] flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1">
          <div className="text-xs md:text-sm text-[#0B71DA] font-medium">FINANCE SOLUTION</div>
          <div className="text-3xl md:text-4xl lg:text-5xl text-white flex flex-col gap-2 md:gap-3 tracking-tight mt-4 md:mt-5">
            <span>Seamless Integration with</span>
            <span>Powerful Developer Tools</span>
          </div>
          <div className="text-white mt-4 md:mt-5 text-sm md:text-base">
            Integrate Finech effortlessly with our developer-friendly APIs,
            designed for speed, security, and scalability.
          </div>
          <div className="mt-4 md:mt-5">
            <Button text="Explore API Docs" icon={ArrowRight} />
          </div>
          <div className="text-white flex flex-col gap-4 md:gap-5 mt-12 md:mt-20">
            <span className="flex flex-row gap-3 items-center">
              <img src="/code.png" alt="" className="h-5 w-4 md:h-6 md:w-5 flex-shrink-0" />
              <p className="text-sm md:text-base">RESTful APIs & Webhooks</p>
            </span>

            <span className="flex flex-row gap-3 items-center">
              <img src="/vector.png" alt="" className="h-5 md:h-6 shrink-0" />
              <p className="text-sm md:text-base">SDK's for Multiple Languages</p>
            </span>

            <span className="flex flex-row gap-3 items-center">
              <img src="/sandbox.png" alt="" className="h-5 md:h-6 shrink-0" />
              <p className="text-sm md:text-base">Sandbox for Testing</p>
            </span>
          </div>
        </div>
        
        {/* Image - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:block shrink-0">
          <img src="/hero3image.png" alt="" className="h-[600px] w-auto" />
        </div>
      </div>
    </div>
  );
}