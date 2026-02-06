import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero5() {
  return (
    <div className="max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center pt-20">
        <p className="text-[#0B71DA] font-medium">SUCCESS STORY</p>
        <div className="text-5xl tracking-tight mt-5">
          How Businesses Thrive with Finech
        </div>
        <div className="text-md text-gray-500 mt-5">
          Join the growing list of companies that trust Finech to power their
          payments, banking, and financial services. From startups to <br />
          enterprises, our platform delivers real results—faster transactions,
          improved security, and effortless scalability.
        </div>
      </div>

      {/* Testimonials wrapper */}
      <div className="relative mt-20">
        {/* Testimonials grid */}
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5">
            <img src="/testimonial1.png" className="h-120" />
            <img src="/testimonial2.png" className="h-120" />
            <img src="/testimonial7.png" />
          </div>

          <div className="flex flex-col gap-5 mt-20">
            <img src="/testimonial3.png" className="h-120" />
            <img src="/testimonial4.png" className="h-120" />
            <img src="/testimonial8.png" />
          </div>

          <div className="flex flex-col gap-5">
            <img src="/testimonial5.png" className="h-120" />
            <img src="/testimonial6.png" className="h-120" />
            <img src="/testimonial9.png" />
          </div>
        </div>

        {/* Fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-56 
                        bg-linear-to-t from-white via-white/80 to-transparent" />

        {/* Button on top */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Button text="Explore Case Studies" icon={ArrowRight} />
        </div>
      </div>
    </div>
  );
}
