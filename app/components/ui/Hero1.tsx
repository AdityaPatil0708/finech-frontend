import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero1() {
  return (
    <div className="flex flex-row gap-4 mt-20 pb-20 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="flex flex-col gap-5 w-1/2">
        <div className="text-sm text-[#0B71DA]">FINANCE SOLUTION </div>
        <div className="text-6xl text-white flex flex-col gap-3 tracking-tight">
          <span>Empowering the</span>
          <span>Next Generation</span>
          <span>of Financial</span>
          <span>Infrastructure,</span>
          <span>Designed for You</span>
        </div>
        <div className="text-white mt-5 text-md">
          Powerful APIs and seamless integrations to help businesses move money,
          <br /> manage risk, and scale globally
        </div>
        <div className="flex items-center gap-2 bg-white rounded-xl px-1 text-sm py-1 w-100 mb-10 mt-3">
          <img src="./envelope.png" alt="" className="h-5 w-5" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Send your Email"
            className="flex-1 outline-none bg-transparent  placeholder:text-gray-400"
          />
          <Button text="Talk to Sales" icon={ArrowRight} />
        </div>
        <div className="text-white mt-20 flex flex-col">
          <p>Partners in Financial Success</p>
          <div className="flex flex-row gap-8 h-12 w-30 mt-4">
            <img src="./slack.png" alt="" />
            <img src="./amazon.png" alt="" />
            <img src="./dropbox.png" alt="" />
            <img src="./loom.png" alt="" />
          </div>
        </div>
      </div>

      {/* Right Section*/}
      <div className="relative w-1/2 h-150">
        <img
          src="./card-1.png"
          alt=""
          className="absolute top-0 left-25 w-110"
          style={{ zIndex: 3 }}
        />

        <img
          src="./card-2.png"
          alt=""
          className="absolute top-35 left-1/2 -translate-x-1/2 w-140"
          style={{ zIndex: 1 }}
        />

        <img
          src="./card-3.png"
          alt=""
          className="absolute top-110 left-30 w-55"
          style={{ zIndex: 3 }}
        />

        <img
          src="./card-4.png"
          alt=""
          className="absolute top-110 right-30 w-45"
          style={{ zIndex: 3 }}
        />
      </div>
    </div>
  );
}
