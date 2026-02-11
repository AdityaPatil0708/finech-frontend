export function Hero4() {
  return (
    <div className="pt-12 md:pt-20 pb-12 md:pb-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-0">

      <div className="text-center">
        <p className="text-primary font-medium text-xs md:text-sm">SECURITY AND COMPLIANCE</p>
        <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight mt-4 md:mt-5 px-4">
          Enterprise-Grade Protection for Your Business
        </div>
        <div className="text-sm md:text-base text-gray-500 mt-4 md:mt-5 px-4">
          Our platform is designed to meet the highest industry standards,
          ensuring your transactions, customer data, and financial operations remain secure and fully compliant with global regulations.
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mt-8 md:mt-10">
        <div className="flex-1">
          <img src="/features.png" alt="" className="w-full h-auto max-h-[600px] object-contain" />
        </div>
        <div className="flex items-center justify-center bg-[url('/pattern5.png')] bg-cover bg-center rounded-xl md:rounded-2xl p-6 md:p-8">
          <img src="/vektor.png" alt="" className="w-full max-w-[300px] md:max-w-[500px] h-auto" />
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <img src="/logos.png" alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}