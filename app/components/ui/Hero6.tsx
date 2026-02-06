import { PricingCard } from "./PricingCard";

export function Hero6() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mt-20 mb-20">
        <p className="text-[#0B71DA] font-medium">PRICING PLAN</p>
        <div className="text-5xl tracking-tight mt-5">
          Find the Right Plan for Your Business
        </div>
        <div className="text-md text-gray-500 mt-5">
          Transparent pricing with powerful features. Whether you're just
          starting out or processing high-volume <br /> transactions, we have a
          plan for you.
        </div>
      </div>
      <div className="flex flex-row gap-5">
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
          cardBgColor="bg-zinc-950
        bg-[url('/pattern.png')]
        bg-cover
        bg-no-repeat
        bg-center"
          cardTextColor="text-white"
          buttonBgColor="bg-[#0B71DA]"
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
