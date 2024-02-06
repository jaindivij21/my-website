// Animation Variant Constants
export const contentAnimationVariants = {
  initial: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: 30,
    transition: {
      duration: 0.5,
    },
  },
};

export const footerAnimationVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
