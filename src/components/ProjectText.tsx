import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styles from './ProjectText.module.css';
import type { Project } from '../utils/arrays/types';

type ProjectTextProps = {
  array: Project[];
  index: number;
};

export default function ProjectText({ array, index }: ProjectTextProps) {
  const transition = useRef<HTMLDivElement>(null);
  const [textState, setStateText] = useState('description');
  const [text, setText] = useState<string[]>([]);

  const turnInvisible = async () => {
    if (!transition.current) return;

    transition.current.className = `invisible ${styles.transitionContainer}`;
  };

  const turnVisible = async () => {
    if (!transition.current) return;

    transition.current.className = `visible ${styles.transitionContainer}`;
  };

  useEffect(() => {
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
    asyncInvisible();
  }, [index, textState, array]);

  const handleTextView = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (textState !== name) {
      setStateText(name);
    }
  };

  return (
    <div className={styles.container}>
      {array[index] && (
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
