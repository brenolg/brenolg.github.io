/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const mainContent = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ball = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const ballMove = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const header = {
  initial: {
    y: "-30vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const motionProps = {
  ballMove,
  mainContent,
  ball,
  header,
};

export default motionProps;
