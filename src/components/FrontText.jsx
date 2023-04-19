import React, { useContext, useRef, useState, useEffect } from 'react';
import front from '../utils/arrays/frontArray';
import Context from '../context/Context';
import styles from './FrontText.module.css';

export default function FrontText() {
  const { frontIndex } = useContext(Context);
  const transition = useRef();
  const [textState, setStateText] = useState('funcionalidades');
  const [text, setText] = useState(`${front[frontIndex].funcionalidades}`);

  useEffect(() => {
    if (textState === 'description') {
      setText(`${front[frontIndex].description}`);
    }
    if (textState === 'funcionalidades') {
      setText(`${front[frontIndex].description}`);
    }
  }, [textState]);

  // const turnInvisible = () => {
  //   transition.current.className = ` invisible ${styles.transitionContainer}`;
  // };

  // const turnVisible = () => {
  //   transition.current.className = ` visible ${styles.transitionContainer}`;
  // };

  const handleDescriptionView = () => {
    setStateText('description');
  };

  return (
    <div className={styles.container}>
      <div ref={transition} className={styles.transitionContainer}>
        <p>{text}</p>
      </div>

      <div className={`${styles.techsContainer}`}>
        {front[frontIndex].techs.map((tech) => (
          <span className={`${styles.techsSpan}`}>{tech}</span>
        ))}
      </div>

      <div className={styles.btnsContainer}>
        <button className={styles.btn} onClick={handleDescriptionView} type="button">
          Descrição
        </button>
        <button className={styles.btn} type="button">
          Funcionalidades
        </button>
      </div>
    </div>
  );
}
