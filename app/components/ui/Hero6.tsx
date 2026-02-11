import { PricingCard } from "./PricingCard";

export function Hero6() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
      <div className="text-center mt-12 md:mt-20 mb-12 md:mb-20">
        <p className="text-primary font-medium text-xs md:text-sm">PRICING PLAN</p>
        <div className="text-3xl md:text-4xl lg:text-5xl tracking-tight mt-4 md:mt-5 px-4">
          Find the Right Plan for Your Business
        </div>
        <div className="text-sm md:text-base text-gray-500 mt-4 md:mt-5 px-4">
          Transparent pricing with powerful features. Whether you're just
          starting out or processing high-volume transactions, we have a
          plan for you.
        </div>
      </div>
      
      {/* Pricing Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <PricingCard
          title="Starter Plan"
          price="$0"
          description="Perfect for freelancers, small businesses, and early-stage startups who need a simple way to accept payments."
          features={[
            "Process up to $10,000/month in transactions",
            "Accept Credit/Debit Cards & Bank Transfers",
            "Basic fraud protection for secure payments",
            "Standard API access for simple integrations",
          ]}
          cardBgColor=""
          btnText="Start now"
        />
        <PricingCard
          title="Growth Plan"
          price="$99"
          description="Best for growing businesses, SaaS platforms, and e-commerce stores looking for seamless transactions and fraud prevention."
          features={[
            "Process up to $250,000/month in transactions",
            "Accept payments via Cards, Bank & Digital Wallets",
            "Advanced fraud protection & chargeback",
            "Full API access + Webhooks for integrations",
            "24/7 chat & email support for faster issue resolution",
            "Faster settlement speed (T+1) for better cash flow",
          ]}
          cardBgColor="bg-zinc-950 bg-[url('/pattern.png')] bg-cover bg-no-repeat bg-center"
          cardTextColor="text-white"
          buttonBgColor="bg-primary"
          btnText="Choose Plan"
          btnTextColor="text-white"
        />
        <PricingCard
          title="Scale Plan"
          price="Custom"
          description="Ideal for enterprises, marketplaces, and businesses processing high transaction volumes that need instant settlements and premium support."
          features={[
            "Process up to $1,000,000/month in transactions",
            "Accept payments via all methods and local",
            "AI-powered fraud detection & real-time monitoring",
            "Dedicated API support with enterprise-grade",
            "Priority customer support via phone, chat & email",
            "Instant settlements for seamless cash flow",
            "Multi-currency support to expand globally",
          ]}
          btnText="Discuss now"
        />
      </div>
    </div>
  );
}