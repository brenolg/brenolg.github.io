import React, { useContext, useRef, useState } from 'react';
import front from '../utils/arrays/frontArray';
import Context from '../context/Context';
import styles from './FrontText.module.css';

export default function FrontText() {
  const { frontIndex } = useContext(Context);
  const transition = useRef();
  const [textState, setStateText] = useState('description');
  const [text, setText] = useState(front[frontIndex].description);

  // const turnInvisible = () => {
  //   transition.current.className = ` invisible ${styles.transitionContainer}`;
  // };

  // const turnVisible = () => {
  //   transition.current.className = ` visible ${styles.transitionContainer}`;
  // };

  const handleTextView = async ({ target }) => {
    const { name } = target;
    setStateText(name);

    if (textState !== name) {
      if (name === 'functionalities') {
        setText(front[frontIndex].functionalities);
      }
      if (name === 'description') {
        setText(front[frontIndex].description);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div ref={transition} className={styles.transitionContainer}>
        {text.map((phrase) => (
          <p>{phrase}</p>
        ))}
      </div>

      <div className={`${styles.techsContainer}`}>
        {front[frontIndex].techs.map((tech) => (
          <span className={`${styles.techsSpan}`}>{tech}</span>
        ))}
      </div>

      <div className={styles.btnsContainer}>
        <button className={styles.btn} onClick={handleTextView} name="description" type="button">
          Descrição
        </button>

        <button
          className={styles.btn}
          onClick={handleTextView}
          name="functionalities"
          type="button"
        >
          Funcionalidades
        </button>
      </div>
    </div>
  );
}
