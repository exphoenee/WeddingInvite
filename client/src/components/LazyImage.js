import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ id, style, alt, src, placeholderSrc }) => (
  <LazyLoadImage
    id={id}
    style={style}
    alt={alt}
    key={alt}
    effect="blur"
    src={src}
    placeholderSrc={placeholderSrc}
  />
);

export default LazyImage;
