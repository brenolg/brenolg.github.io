import React, { useContext, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import front from '../utils/arrays/frontArray';
import Context from '../context/Context';
import styles from './FrontImg.module.css';

export default function FrontImg() {
  const { frontIndex, setFrontIndex } = useContext(Context);
  const imgRef = useRef();

  const turnInvisible = () => {
    imgRef.current.className = ` invisible ${styles.image}`;
  };

  const turnVisible = () => {
    imgRef.current.className = ` visible ${styles.image}`;
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

      <div>
        <h2>{front[frontIndex].title}</h2>

        <img ref={imgRef} className={styles.image} src={front[frontIndex].img} alt='"projectImg"' />

        <div>
          {front[frontIndex].techs.map((tech) => (
            <span>{tech}</span>
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
