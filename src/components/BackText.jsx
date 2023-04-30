import React, { useContext, useRef, useState, useEffect } from 'react';
import back from '../utils/arrays/backArray';
import Context from '../context/Context';
import styles from './carouselText.module.css';

export default function BackText() {
  const { backIndex } = useContext(Context);
  const transition = useRef();
  const [textState, setStateText] = useState('description');
  const [textIndex, setTextIndex] = useState(backIndex);
  const [text, setText] = useState(back[textIndex].description);

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
        setTextIndex(backIndex);
        setText(back[textIndex].functionalities);
      }
      if (textState === 'description') {
        setTextIndex(backIndex);
        setText(back[textIndex].description);
      }
      await turnVisible();
    }, 300);
  };

  useEffect(() => {
    asyncInvisible();
  }, [backIndex, textState, textIndex]);

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

        {back[textIndex].ps && (
          <p>
            <span className={styles.psSpan}>{back[textIndex].ps[0]}</span>
            <span>{back[textIndex].ps[1]}</span>
          </p>
        )}

        <div className={`${styles.techsContainer}`}>
          {back[textIndex].techs.map((tech) => (
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
