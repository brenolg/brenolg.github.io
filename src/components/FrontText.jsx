import React, { useContext, useRef, useState, useEffect } from 'react';
import front from '../utils/arrays/frontArray';
import Context from '../context/Context';
import styles from './carouselText.module.css';

export default function FrontText() {
  const { frontIndex } = useContext(Context);
  const transition = useRef();
  const [textState, setStateText] = useState('description');
  const [textIndex, setTextIndex] = useState(frontIndex);
  const [text, setText] = useState(front[textIndex].description);

  const turnInvisible = async () => {
    transition.current.className = ` invisible ${styles.transitionContainer}`;
  };

  const turnVisible = async () => {
    transition.current.className = ` visible ${styles.transitionContainer}`;
  };

  const asyncInvisible = async () => {
    await turnInvisible();

    setTimeout(async () => {
      if (textState === 'functionalities') {
        setTextIndex(frontIndex);
        setText(front[textIndex].functionalities);
      }
      if (textState === 'description') {
        setTextIndex(frontIndex);
        setText(front[textIndex].description);
      }
      await turnVisible();
    }, 300);
  };

  useEffect(() => {
    asyncInvisible();
  }, [frontIndex, textState, textIndex]);

  const handleTextView = async ({ target }) => {
    const { name } = target;

    if (textState !== name) {
      setStateText(name);
    }
  };

  return (
    <div className={styles.container}>
      <div ref={transition} className={styles.transitionContainer}>
        {text.map((phrase) => (
          <p key={phrase}>{phrase}</p>
        ))}

        {front[textIndex].ps && (
          <p>
            <span className={styles.psSpan}>{front[textIndex].ps[0]}</span>
            <span>{front[textIndex].ps[1]}</span>
          </p>
        )}

        <div className={`${styles.techsContainer}`}>
          {front[textIndex].techs.map((tech) => (
            <span className={`${styles.techsSpan}`} key={tech}>
              {tech}
            </span>
          ))}
        </div>
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
