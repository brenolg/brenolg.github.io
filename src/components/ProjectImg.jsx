import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import styles from './ProjectImg.module.css';

export default function ProjectImg({ array, setIndex, index }) {
  const transition = useRef();

  const turnInvisible = async () => {
    transition.current.className = ` invisible ${styles.transitionContainer}`;
  };

  const turnVisible = async () => {
    transition.current.className = ` visible ${styles.transitionContainer}`;
  };

  const handleLeftArrow = async () => {
    await turnInvisible();
    setTimeout(async () => {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(array.length - 1);
      }
    }, 350);
    setTimeout(async () => {
      await turnVisible();
    }, 400);
  };

  const handleRightArrow = async () => {
    await turnInvisible();
    setTimeout(async () => {
      if (index < array.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 350);
    setTimeout(async () => {
      await turnVisible();
    }, 400);
  };

  return (
    <div className={styles.mainContainer}>
      {array.length && (
        <>
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
              {array[index].title && <h2 className={styles.title}>{array[index].title}</h2>}

              <img className={styles.image} src={array[index].img} alt='"projectImg"' />

              <div className={`${styles.buttonsContainer}`}>
                {array[index].linkToPage && (
                  <button className={`${styles.btn} ${styles.btnText}`} type="button">
                    <a href={array[index].linkToPage} target="_blank" rel="noopener noreferrer">
                      Preview
                    </a>
                  </button>
                )}

                <button className={`${styles.btn} ${styles.btnText}`} type="button">
                  <a href={array[index].linkToRepo} target="_blank" rel="noopener noreferrer">
                    Repositório
                  </a>
                </button>
              </div>
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
        </>
      )}
    </div>
  );
}

ProjectImg.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      linkToRepo: PropTypes.string.isRequired,
      linkToPage: PropTypes.string,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
