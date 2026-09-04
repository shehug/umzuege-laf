import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export default function Image({
  src,
  alt,
  fill,
  priority,
  sizes,
  quality,
  className,
  style,
  ...props
}: ImageProps) {
  const fillStyle: React.CSSProperties = fill
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        inset: 0,
        ...style,
      }
    : { ...style };

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      className={className}
      style={fillStyle}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  );
}
