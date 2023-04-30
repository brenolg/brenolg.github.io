import React, { useContext, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import back from '../utils/arrays/backArray';
import Context from '../context/Context';
import styles from './carouselImg.module.css';

export default function BackImg() {
  const { backIndex, setBackIndex } = useContext(Context);
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
      if (backIndex > 0) {
        setBackIndex(backIndex - 1);
      } else {
        setBackIndex(back.length - 1);
      }
      turnVisible();
    }, 400);
  };

  const handleRightArrow = () => {
    turnInvisible();
    setTimeout(() => {
      if (backIndex < back.length - 1) {
        setBackIndex(backIndex + 1);
      } else {
        setBackIndex(0);
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
          <h2 className={styles.title}>{back[backIndex].title}</h2>
          <img className={styles.image} src={back[backIndex].img} alt='"projectImg"' />
        </div>

        <div className={`${styles.buttonsContainer}`}>
          <button className={`${styles.btn} ${styles.btnText}`} type="button">
            <a href={back[backIndex].linkToRepo} target="_blank" rel="noopener noreferrer">
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
