import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero5() {
  return (
    <div className="max-w-7xl mx-auto relative px-4 md:px-8 lg:px-0">
      {/* Header */}
      <div className="text-center pt-12 md:pt-20">
        <p className="text-[#0B71DA] font-medium text-xs md:text-sm">SUCCESS STORY</p>
        <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight mt-4 md:mt-5 px-4">
          How Businesses Thrive with Finech
        </div>
        <div className="text-sm md:text-base text-gray-500 mt-4 md:mt-5 px-4">
          Join the growing list of companies that trust Finech to power their
          payments, banking, and financial services. From startups to
          enterprises, our platform delivers real results—faster transactions,
          improved security, and effortless scalability.
        </div>
      </div>

      {/* Testimonials wrapper */}
      <div className="relative mt-12 md:mt-20">
        {/* Testimonials grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-5">
            <img src="/testimonial1.png" className="w-full h-auto rounded-xl" />
            <img src="/testimonial2.png" className="w-full h-auto rounded-xl" />
            <img src="/testimonial7.png" className="w-full h-auto rounded-xl" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-5 md:mt-10 lg:mt-20">
            <img src="/testimonial3.png" className="w-full h-auto rounded-xl" />
            <img src="/testimonial4.png" className="w-full h-auto rounded-xl" />
            <img src="/testimonial8.png" className="w-full h-auto rounded-xl" />
          </div>

          {/* Column 3 - Hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-5">
            <img src="/testimonial5.png" className="w-full h-auto rounded-xl" />
            <img src="/testimonial6.png" className="w-full h-auto rounded-xl" />
            <img src="/testimonial9.png" className="w-full h-auto rounded-xl" />
          </div>
        </div>

        {/* Fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 md:h-56 
                        bg-linear-to-t from-white via-white/80 to-transparent" />

        {/* Button on top */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Button text="Explore Case Studies" icon={ArrowRight} />
        </div>
      </div>
    </div>
  );
}