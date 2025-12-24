"use client";

import Image, { ImageProps } from "next/image";
import React, { useState, useRef } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  style,
  fill,
  priority = false,
  loading = "lazy",
  sizes,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset error state when src changes using key prop on Image component
  // This ensures component remounts when src changes, resetting error state

  const handleError = () => {
    if (!didError) {
      setDidError(true);
      setImgSrc(ERROR_IMG_SRC);
    }
  };

  // SEO: Ensure alt text is always provided
  const seoAlt = alt || "Image";

  // If using fill, render differently
  if (fill) {
    return (
      <div className={`relative ${className}`} style={style}>
        {didError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Image
              src={ERROR_IMG_SRC}
              alt={`${seoAlt} - Error loading image`}
              fill
              className="object-contain opacity-30"
              unoptimized
              aria-label="Error loading image"
            />
          </div>
        ) : (
          <Image
            key={src}
            src={imgSrc}
            alt={seoAlt}
            fill
            className={className}
            style={style}
            loading={loading}
            priority={priority}
            onError={handleError}
            {...rest}
          />
        )}
      </div>
    );
  }

  // Standard image with width/height for SEO
  // Use provided dimensions or sensible defaults for Next.js Image requirements
  const imgWidth = width || 800;
  const imgHeight = height || 600;

  return (
    <>
      {didError ? (
        <div
          className={`flex items-center justify-center bg-gray-100 ${className}`}
          style={style}
        >
          <Image
            src={ERROR_IMG_SRC}
            alt={`${seoAlt} - Error loading image`}
            width={imgWidth}
            height={imgHeight}
            className="object-contain opacity-30"
            unoptimized
            loading="lazy"
            aria-label="Error loading image"
            data-original-url={src}
          />
        </div>
      ) : (
        <Image
          key={src}
          src={imgSrc}
          alt={seoAlt}
          width={imgWidth}
          height={imgHeight}
          className={className}
          style={style}
          loading={loading}
          priority={priority}
          sizes={sizes}
          onError={handleError}
          {...rest}
        />
      )}
    </>
  );
}
