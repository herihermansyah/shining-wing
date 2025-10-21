import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  logoText?: string;
  logoImage?: string;
  src?: string;
  alt?: string;
  textClass?: string;
  imageClass?: string;
  className?: string;
  width?: number;
  height?: number;
};

function Logo({
  logoText,
  logoImage,
  src = "",
  alt = "",
  width,
  height,
  textClass = "",
  imageClass = "",
  className = "",
}: LogoProps) {
  return (
    <div className={className}>
      <Link href={"/"}>
        {logoText && <h1 className={textClass}>{logoText}</h1>}
        {logoImage && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={imageClass}
          />
        )}
      </Link>
    </div>
  );
}

export default Logo;
