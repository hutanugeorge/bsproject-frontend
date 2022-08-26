export const h1 = {
  whileHover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 200,
      bounce: 15,
      duration: 3,
    },
  },
  initial: {
    opacity: 0,
    y: -50,
    x: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: [0, 40, -10, 0],
    transition: {
      type: 'spring',
      stiffness: 1000,
      duration: 1,
    },
  },
  transition: {
    type: 'spring',
    bounce: 2,
    stiffness: 700,
  },
  whileTap: {
    scale: 1.2,
  },
};
