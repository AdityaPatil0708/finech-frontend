import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function Hero7() {
  return (
    <div className="max-w-8xl mx-auto mt-20 px-4">
      {/* Outer container */}
      <div
        className="
    rounded-2xl
    overflow-hidden
    bg-zinc-950
    bg-[url('/gradient-3.png'),url('/pattern.png')]
    bg-cover
    bg-no-repeat
    bg-center
    pt-20
  "
      >
        {/* Text */}
        <div className="text-center pt-10">
          <p className="text-[#0B71DA] font-medium">FINANCE SOLUTION</p>

          <div className="text-5xl tracking-tight mt-5 text-white">
            Ready to Scale Your Payments?
          </div>

          <div className="text-lg text-white mt-5">
            Join thousands of businesses worldwide using Finech to simplify
            <br />
            transactions, enhance security, and drive growth.
          </div>
        </div>

        {/* Email input */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-white rounded-2xl px-2 py-1 w-full max-w-xl mt-15 mb-20">
            <img src="/envelope.png" alt="" className="h-5 w-5" />

            <input
              type="text"
              placeholder="Send your Email"
              className="flex-1 outline-none bg-transparent placeholder:text-gray-400"
            />

            <Button text="Talk to Sales" icon={ArrowRight} />
          </div>
        </div>

        {/* Logos */}
        <div className="flex justify-center">
          <img src="/hero7logos.png" alt="" />
        </div>
      </div>
    </div>
  );
}
