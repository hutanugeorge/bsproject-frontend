export const ctaButton = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.8,
  },
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
  transition: {
    type: 'spring',
    duration: 0.7,
    stiffness: 200,
  },
};

export const title = {
  initial: {
    x: -100,
  },
  animate: {
    x: 0,
  },
  transition: {
    type: 'spring',
    duration: 0.7,
    stiffness: 200,
  },
};
