import PropTypes from "prop-types";
import { useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import styles from "./ProjectImg.module.css";

export default function ProjectImg({ array, setIndex, index }) {
  const transition = useRef();
  const project = array[index];

  const setTransition = (state) => {
    if (!transition.current) return;
    transition.current.className = `${state} ${styles.transitionContainer}`;
  };

  const changeIndex = (newIndex) => {
    setTransition("invisible");

    setTimeout(() => {
      setIndex(newIndex);
    }, 350);

    setTimeout(() => {
      setTransition("visible");
    }, 400);
  };

  const handleLeftArrow = () => {
    const newIndex = index > 0 ? index - 1 : array.length - 1;
    changeIndex(newIndex);
  };

  const handleRightArrow = () => {
    const newIndex = index < array.length - 1 ? index + 1 : 0;
    changeIndex(newIndex);
  };

  console.log(index, array);
  if (!project) return null;

  return (
    <div className={styles.mainContainer}>
      <button
        type="button"
        className={`${styles.btn} ${styles.transitionBtn}`}
        onClick={handleLeftArrow}
      >
        <BiLeftArrow className={`${styles.iconBtn} ${styles.iconLeft}`} />
      </button>

      <div className={styles.subContainer}>
        <div ref={transition} className={styles.transitionContainer}>
          {project.title && <h2 className={styles.title}>{project.title}</h2>}

          <img
            className={styles.image}
            src={project.img}
            alt={project.title || "project"}
          />

          <div className={styles.buttonsContainer}>
            {project.linkToPage && (
              <button
                className={`${styles.btn} ${styles.btnText}`}
                type="button"
              >
                <a
                  href={project.linkToPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </button>
            )}

            <button className={`${styles.btn} ${styles.btnText}`} type="button">
              <a
                href={project.linkToRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório
              </a>
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.btn} ${styles.transitionBtn}`}
        onClick={handleRightArrow}
      >
        <BiRightArrow className={`${styles.iconBtn} ${styles.iconRight}`} />
      </button>
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
