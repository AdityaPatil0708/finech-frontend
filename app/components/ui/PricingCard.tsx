import { Check } from "lucide-react";
import { Button2 } from "./Button2";

type PricingCardProps = {
  title: string;
  price: string;
  period?: string;
  subtitle?: string;
  description: string;
  features: string[];
  buttonText?: string;
  highlighted?: boolean;
  cardBgColor?: string;
  buttonBgColor?: string;
  btnText: string;
  cardTextColor?: string;
  btnTextColor?: string;
};

export function PricingCard({
  title,
  price,
  period = "/ month",
  subtitle,
  description,
  features,
  cardBgColor = "bg-white",
  cardTextColor = "text-gray-900",
  buttonBgColor = "bg-white",
  btnTextColor = "text-black",
  btnText,
}: PricingCardProps) {
  return (
    <div
      className={`w-full max-w-7xl rounded-3xl border border-gray-200 p-8 flex flex-col justify-between transition ${cardBgColor}`}
    >
      {/* Top */}
      <div>
        <h3 className={`text-4xl font-semibold ${cardTextColor}`}>{title}</h3>

        <div className="mt-6 flex items-end gap-2">
          <span className={`text-4xl font-bold ${cardTextColor}`}>{price}</span>
          <span className={`text-xl opacity-70 ${cardTextColor}`}>{period}</span>
        </div>

        {subtitle && (
          <p className={`text-xl mt-3 opacity-60 ${cardTextColor}`}>{subtitle}</p>
        )}

        <p className={`text-sm mt-6 opacity-70 ${cardTextColor}`}>{description}</p>

        <div className="my-8 border-t border-gray-300" />

        <p className={`text-sm mb-5 opacity-60 ${cardTextColor}`}>
          FEATURES
        </p>

        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className="text-blue-600" />
              <span className={cardTextColor}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
        <Button2
        className="mt-5 border border-blue-500 text-xs"
        text={btnText}
        bgColor={buttonBgColor}
        textColor={btnTextColor}
        />

    </div>
  );
}