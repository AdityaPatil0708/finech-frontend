interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  imageSrc: string;
  widthClass?: string;
}

export function Card2({
  iconSrc,
  title,
  description,
  imageSrc,
  widthClass = "w-full",
}: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-xl md:rounded-2xl border border-zinc-200 p-4 md:p-6 flex flex-col ${widthClass}`}>
      {/* Top: Text */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-row gap-2 items-start">
          <img src={iconSrc} alt="" className="h-6 md:h-8 shrink-0" />
          <h3 className="text-lg md:text-2xl font-medium mb-1 md:mb-2 tracking-tight">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom: Image */}
      <div className="mt-auto">
        <img
          src={imageSrc}
          alt={title}
          className="w-full rounded-lg md:rounded-xl h-auto"
        />
      </div>
    </div>
  );
}