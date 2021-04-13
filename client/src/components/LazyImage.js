import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ alt, src, placeholderSrc }) => (
  <LazyLoadImage
    alt={alt}
    key={alt}
    effect="blur"
    src={src}
    placeholderSrc={placeholderSrc}
  />
);

export default LazyImage;
