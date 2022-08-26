export const ul = {
  initial: {
    y: -50,
    scale: 0,
  },
  animate: {
    y: 0,
    scale: 1,
  },
  transition: {
    type: 'spring',
    duration: 0.1,
    stiffness: 100,
  },
};

export const text = {
  whileHover: {
    scale: 1.1,
    color: 'white',
  },
  transition: {
    type: 'spring',
    duration: 0.1,
    stiffness: 100,
  },
  whileTap: {
    scale: 0.9,
  },
};
