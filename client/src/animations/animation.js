export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.5 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};
