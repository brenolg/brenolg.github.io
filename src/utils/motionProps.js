const pages = {
  initial: {
    width: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    width: '100%',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: window.innerWidth,
    transition: {
      duration: 0.5,
    },
  },
};

const ballMove = {
  initial: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const motionProps = {
  ballMove, pages,
};

export default motionProps;
