interface FeatureTileProps {
  imageSrc: string;
  alt?: string;
}

export function UseCaseCard({ imageSrc, alt = "" }: FeatureTileProps) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-auto max-h-[440px] object-contain rounded-xl"
      />
    </div>
  );
}