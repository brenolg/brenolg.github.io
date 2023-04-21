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
        setFrontIndex(front.length - 1);
      }
      turnVisible();
    }, 400);
  };

  const handleRightArrow = () => {
    turnInvisible();
    setTimeout(() => {
      if (frontIndex < front.length - 1) {
        setFrontIndex(frontIndex + 1);
      } else {
        setFrontIndex(0);
      }
      turnVisible();
    }, 400);
  };

  return (
    <div className={styles.mainContainer}>
      <button
        type="button"
        className={`${styles.btn} ${styles.transitionBtn}`}
        onClick={() => {
          handleLeftArrow();
        }}
      >
        <BiLeftArrow className={`${styles.iconBtn} ${styles.iconLeft}`} />
      </button>
      <div className={styles.subContainer}>
        <div ref={transition} className={styles.transitionContainer}>
          <h2 className={styles.title}>{front[frontIndex].title}</h2>
          <img className={styles.image} src={front[frontIndex].img} alt='"projectImg"' />
        </div>

        <div className={`${styles.buttonsContainer}`}>
          <button className={`${styles.btn} ${styles.btnText}`} type="button">
            <a href={front[frontIndex].linkToPage} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </button>

          <button className={`${styles.btn} ${styles.btnText}`} type="button">
            <a href={front[frontIndex].linkToRepo} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.btn} ${styles.transitionBtn}`}
        onClick={() => {
          handleRightArrow();
        }}
      >
        <BiRightArrow className={`${styles.iconBtn} ${styles.iconRight}`} />
      </button>
    </div>
  );
}
