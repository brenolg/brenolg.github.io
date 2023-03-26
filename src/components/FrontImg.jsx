import React, { useContext, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import frontImgs from '../arrays/frontImgs ';
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
        setFrontIndex(2);
      }
      turnVisible();
    }, 500);
  };

  const handleRightArrow = () => {
    turnInvisible();
    setTimeout(() => {
      if (frontIndex < 2) {
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
        className="btnCircle"
        onClick={() => {
          handleLeftArrow();
        }}
      >
        <BiLeftArrow className="iconBtn" />
      </button>

      <img
        ref={imgRef}
        className={styles.image}
        src={frontImgs[frontIndex]}
        alt='"projectImg"'
      />

      <button
        className="btnCircle"
        onClick={() => {
          handleRightArrow();
        }}
      >
        <BiRightArrow className="iconBtn" />
      </button>
    </div>
  );
}
