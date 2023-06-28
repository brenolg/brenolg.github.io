import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectText.module.css';

export default function ProjectText({ array, index }) {
  const transition = useRef();
  const [textState, setStateText] = useState('description');
  const [text, setText] = useState([]);

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
        setText(array[index].functionalities);
      }
      if (textState === 'description') {
        setText(array[index].description);
      }
      await turnVisible();
    }, 300);
  };

  useEffect(() => {
    asyncInvisible();
  }, [index, textState]);

  const handleTextView = async ({ target }) => {
    const { name } = target;

    if (textState !== name) {
      setStateText(name);
    }
  };

  return (
    <div className={styles.container}>
      {array.length && (
        <>
          <div ref={transition} className={styles.transitionContainer}>
            {text.map((phrase) => (
              <p key={phrase}>{phrase}</p>
            ))}

            {array[index].ps && (
              <p>
                <span className={styles.psSpan}>{array[index].ps[0]}</span>
                <span>{array[index].ps[1]}</span>
              </p>
            )}

            <div className={`${styles.techsContainer}`}>
              {array[index].techs.map((tech) => (
                <span className={`${styles.techsSpan}`} key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.btnsContainer}>
            <button
              className={styles.btn}
              onClick={handleTextView}
              name="description"
              type="button"
            >
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
        </>
      )}
    </div>
  );
}

ProjectText.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      ps: PropTypes.arrayOf(PropTypes.string),
      techs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
};
