interface FeatureTileProps {
  imageSrc: string;
  alt?: string;
}

export function UseCaseCard({ imageSrc, alt = "", }: FeatureTileProps) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={imageSrc}
        alt={alt}
        className="h-110"
      />
    </div>
  );
}
