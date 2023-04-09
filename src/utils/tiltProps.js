const glareEnable = 'glareEnable';

const defaultProps = {
  perspective: 2250,
  tiltMaxAngleX: 3,
  tiltMaxAngleY: 3,
  transitionSpeed: 3000,
  glareEnable,
  glareBorderRadius: '5.5rem',
  glareMaxOpacity: 0.1,
  glareColor: 'rgb(189, 189, 189, 0.5)',
};

const myImgProps = {
  glareBorderRadius: '5.5rem',
  glareColor: 'rgb(189, 189, 189, 0.5)',
  glareEnable,
  glareMaxOpacity: 0.2,
  perspective: 2250,
  tiltMaxAngleX: 7,
  tiltMaxAngleY: 7,
  transitionSpeed: 5000,
};

const techContainerProps = {
  glareBorderRadius: '5.5rem',
  glareColor: 'rgb(189, 189, 189, 0.5)',
  glareEnable,
  glareMaxOpacity: 0.2,
  perspective: 2250,
  tiltMaxAngleX: 5,
  tiltMaxAngleY: 5,
  transitionSpeed: 3000,
};

const techsProps = {
  perspective: 150,
  scale: 1.2,
  tiltMaxAngleX: 40,
  tiltMaxAngleY: 40,
  transitionSpeed: 3000,
};

const tiltProps = {
  defaultProps,
  techContainerProps,
  techsProps,
  myImgProps,
};

export default tiltProps;
