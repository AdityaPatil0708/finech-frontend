interface Card1BaseProps {
  iconSrc: string;
  title: string;
  description: string;
  imageSrc: string;
  widthClass?: string;     // e.g. "w-[40%]"
}

export function Card1({
  iconSrc,
  title,
  description,
  imageSrc,
  widthClass = "w-full",
}: Card1BaseProps) {
  return (
    <div className={`bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col ${widthClass}`}>
      {/* Top: Text */}
      <div className="mb-6">
        <div className="flex flex-row gap-2">
          <img src={iconSrc} alt="" className="h-8" />
          <h3 className="text-2xl font-medium mb-2 tracking-tight">
            {title}
          </h3>
        </div>
        <p className="text-md text-zinc-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom: Image (centered) */}
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={title}
        />
      </div>
    </div>
  );
}
