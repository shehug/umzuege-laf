import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  class?: string;
}

export default function Image({
  src,
  alt,
  fill,
  priority,
  sizes,
  quality,
  className,
  class: astroClass,
  style,
  ...props
}: ImageProps) {
  const combinedClassName = [className, astroClass].filter(Boolean).join(" ");

  const hasContain = combinedClassName.includes("object-contain");
  const defaultObjectFit: React.CSSProperties["objectFit"] = hasContain
    ? "contain"
    : (fill ? "cover" : undefined);

  const fillStyle: React.CSSProperties = fill
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        inset: 0,
        ...(defaultObjectFit ? { objectFit: defaultObjectFit } : {}),
        ...style,
      }
    : {
        ...(defaultObjectFit ? { objectFit: defaultObjectFit } : {}),
        ...style,
      };

  const isRaster = /\.(jpe?g|png)$/i.test(src);
  const webpSrc = isRaster ? src.replace(/\.(jpe?g|png)$/i, ".webp") : null;

  const imgElement = (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      className={combinedClassName || undefined}
      style={fillStyle}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : (props.fetchPriority as any)}
      decoding="async"
      {...props}
    />
  );

  if (webpSrc) {
    return (
      <picture style={{ display: "contents" }}>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        {imgElement}
      </picture>
    );
  }

  return imgElement;
}

