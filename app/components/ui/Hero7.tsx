import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function Hero7() {
  return (
    <div className="max-w-7xl mx-auto mt-12 md:mt-20 px-4 md:px-8 lg:px-0">
      {/* Outer container */}
      <div className="rounded-xl md:rounded-2xl overflow-hidden bg-zinc-950 bg-[url('/gradient-3.png'),url('/pattern.png')] bg-cover bg-no-repeat bg-center pt-12 md:pt-20">
        
        {/* Text */}
        <div className="text-center pt-6 md:pt-10 px-4">
          <p className="text-primary font-medium text-xs md:text-sm">FINANCE SOLUTION</p>

          <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight mt-4 md:mt-5 text-white">
            Ready to Scale Your Payments?
          </div>

          <div className="text-base md:text-lg text-white mt-4 md:mt-5">
            Join thousands of businesses worldwide using Finech to simplify
            transactions, enhance security, and drive growth.
          </div>
        </div>

        {/* Email input */}
        <div className="flex justify-center px-4">
          <div className="flex items-center gap-1 md:gap-2 bg-white rounded-xl md:rounded-2xl px-2 py-2 md:py-1 w-full max-w-xl mt-8 md:mt-[60px] mb-12 md:mb-20">
            <img src="/envelope.png" alt="" className="h-4 w-4 md:h-5 md:w-5 ml-1" />

            <input
              type="text"
              placeholder="Send your Email"
              className="flex-1 outline-none bg-transparent placeholder:text-gray-400 text-xs md:text-sm px-2"
            />

            <Button text="Talk to Sales" icon={ArrowRight} />
          </div>
        </div>

        {/* Logos */}
        <div className="flex justify-center">
          <img src="/hero7logos.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
}