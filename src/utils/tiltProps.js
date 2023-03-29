const glareEnable = 'glareEnable';

const homeDefaultProps = {
  perspective: 2250,
  tiltMaxAngleX: 3,
  tiltMaxAngleY: 3,
  transitionSpeed: 3000,
  glareEnable,
  glareBorderRadius: '2.5rem',
  glareMaxOpacity: 0.1,
  glareColor: 'rgb(189, 189, 189, 0.5)',
};

const techContainerProps = {
  glareBorderRadius: '2.5rem',
  glareColor: 'rgb(189, 189, 189, 0.5)',
  glareEnable,
  glareMaxOpacity: 0.1,
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
  homeDefaultProps,
  techContainerProps,
  techsProps,
};

export default tiltProps;
