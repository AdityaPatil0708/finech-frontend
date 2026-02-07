import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero1() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mt-10 md:mt-20 pb-10 md:pb-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
      {/* Left Section */}
      <div className="flex flex-col gap-4 md:gap-5 w-full lg:w-1/2">
        <div className="text-xs md:text-sm text-[#0B71DA] font-medium">FINANCE SOLUTION</div>
        <div className="text-5xl md:text-5xl lg:text-6xl text-white flex flex-col gap-2 md:gap-3 md:tracking-tight">
          <span>Empowering the</span>
          <span>Next Generation</span>
          <span>of Financial</span>
          <span>Infrastructure,</span>
          <span>Designed for You</span>
        </div>
        
        <div className="text-white mt-3 md:mt-5 text-sm md:text-base">
          Powerful APIs and seamless integrations to help businesses move money,
          manage risk, and scale globally
        </div>

        <div className="flex items-center gap-1 md:gap-2 bg-white rounded-xl md:rounded-2xl px-2 md:px-1 text-xs md:text-sm py-2 md:py-1 mb-6 md:mb-10 mt-2 md:mt-3 w-full lg:w-4/5">
          <img src="./envelope.png" alt="" className="h-4 w-4 md:h-5 md:w-5 ml-1" />
          <input
            type="text"
            placeholder="Send your Email"
            className="flex-1 outline-none bg-transparent placeholder:text-gray-400 text-xs md:text-sm px-2"
          />
          <Button text="Talk to Sales" icon={ArrowRight} />
        </div>

        <div className="text-white mt-10 md:mt-20 flex flex-col">
          <p className="text-sm md:text-base mb-3 md:mb-4">Partners in Financial Success</p>
          <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-8 items-center">
            <img src="./slack.png" alt="" className="h-8 md:h-12 w-auto" />
            <img src="./amazon.png" alt="" className="h-8 md:h-12 w-auto" />
            <img src="./dropbox.png" alt="" className="h-8 md:h-12 w-auto" />
            <img src="./loom.png" alt="" className="h-8 md:h-12 w-auto" />
          </div>
        </div>
      </div>

      {/* Right Section - Responsive */}
      <div className="relative w-full lg:w-1/2 aspect-4/3 lg:aspect-auto lg:min-h-[600px] mb-15">
        <img
          src="./card-1.png"
          alt=""
          className="absolute top-0 left-[18%] lg:left-[100px] w-[73%] lg:w-[440px]"
          style={{ zIndex: 3 }}
        />

        <img
          src="./card-2.png"
          alt=""
          className="absolute top-[30%] lg:top-[140px] left-1/2 -translate-x-1/2 w-[93%] lg:w-[560px]"
          style={{ zIndex: 1 }}
        />

        <img
          src="./card-3.png"
          alt=""
          className="absolute top-[90%] lg:top-[440px] left-[20%] lg:left-[120px] w-[37%] lg:w-[220px]"
          style={{ zIndex: 3 }}
        />

        <img
          src="./card-4.png"
          alt=""
          className="absolute top-[90%] lg:top-[440px] right-[20%] lg:right-[120px] w-[30%] lg:w-[180px]"
          style={{ zIndex: 3 }}
        />
      </div>
    </div>
  );
}