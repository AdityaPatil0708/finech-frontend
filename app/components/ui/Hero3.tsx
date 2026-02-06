import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { UseCaseCard } from "./UsecaseCard";

export function Hero3() {
  return (
    <div className="pt-20 pb-20">
      <div className="text-center max-w-7xl mx-auto">
        <p className="text-[#0B71DA] font-medium">WHO IS IT FOR?</p>
        <div className="text-5xl tracking-tight mt-5 text-white">
          Financial Solutions for Every Industry
        </div>
        <div className="text-white text-md mt-5">
          Our platform empowers you to handle transactions, streamline
          operations, and integrate financial <br /> services seamlessly.
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center pt-20">
        <div className="flex flex-row gap-5">
          <UseCaseCard imageSrc="./cardComp.png" />
          <UseCaseCard imageSrc="./card2Comp.png" />
        </div>
        <div className="flex flex-row gap-5">
          <UseCaseCard imageSrc="./card3Comp.png" />
          <UseCaseCard imageSrc="./card4Comp.png" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-75 flex flex-row gap-20">
        <div>
          <div className="text-sm text-[#0B71DA]">FINANCE SOLUTION </div>
          <div className="text-5xl text-white flex flex-col gap-3 tracking-tight mt-5">
            <span>Seamless Integration with</span>
            <span>Powerful Developer Tools</span>
          </div>
          <div className="text-white mt-5">
            Integrate Finech effortlessly with our developer-friendly APIs,
            designed <br />
            for speed, security, and scalability.
          </div>
          <div className="mt-5">
            <Button text="Explore API Docs" icon={ArrowRight} />
          </div>
          <div className="text-white flex flex-col gap-5 mt-20">
                <span className="flex flex-row gap-3">
                    <img src="/code.png" alt="" className="h-6 w-5" />
                <p>RESTful APIs & Webhooks</p>
                </span>

                <span className="flex flex-row gap-3">
                    <img src="/vector.png" alt="" className="h-6" />
                <p>SDK's for Multiple Languages</p>
                </span>

               <span className="flex flex-row gap-3"> <img src="/sandbox.png" alt=""  className="h-6"/>
                <p>Sandbox for Testing</p></span>

          </div>
        </div>
        <img src="/hero3image.png" alt="" className="h-150" />
      </div>
    </div>
  );
}
