import React, { useContext, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import front from '../utils/arrays/frontArray';
import Context from '../context/Context';
import styles from './FrontImg.module.css';

export default function FrontImg() {
  const { frontIndex, setFrontIndex } = useContext(Context);
  const transition = useRef();

  const turnInvisible = () => {
    transition.current.className = ` invisible ${styles.transitionContainer}`;
  };

  const turnVisible = () => {
    transition.current.className = ` visible ${styles.transitionContainer}`;
  };

  const handleLeftArrow = () => {
    turnInvisible();
    setTimeout(() => {
      if (frontIndex > 0) {
        setFrontIndex(frontIndex - 1);
      } else {
        setFrontIndex(1);
      }
      turnVisible();
    }, 500);
  };

  const handleRightArrow = () => {
    turnInvisible();
    setTimeout(() => {
      if (frontIndex < 1) {
        setFrontIndex(frontIndex + 1);
      } else {
        setFrontIndex(0);
      }
      turnVisible();
    }, 500);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          handleLeftArrow();
        }}
      >
        <BiLeftArrow className={`${styles.iconBtn} ${styles.iconLeft}`} />
      </button>

      <div ref={transition} className={styles.transitionContainer}>
        <h2 className={styles.title}>{front[frontIndex].title}</h2>

        <img className={styles.image} src={front[frontIndex].img} alt='"projectImg"' />

        <div className={`${styles.techsContainer}`}>
          {front[frontIndex].techs.map((tech) => (
            <span className={`${styles.techs}`}>{tech}</span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          handleRightArrow();
        }}
      >
        <BiRightArrow className={`${styles.iconBtn} ${styles.iconRight}`} />
      </button>
    </div>
  );
}
