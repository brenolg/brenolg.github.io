import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import ProjectImg from '../components/ProjectImg';
import ProjectText from '../components/ProjectText';
import Context from '../context/Context';
import backArray from '../utils/arrays/backArray';
import featuredArray from '../utils/arrays/featuredArray';
import frontArray from '../utils/arrays/frontArray';
import motionProps from '../utils/motionProps';
import styles from './Projects.module.css';

export default function Projects() {
  /* eslint-disable */
  const { backIndex, setBackIndex, frontIndex, setFrontIndex, setFeaturedIndex, featuredIndex } =
    useContext(Context);
  /* eslint-enable */

  return (
    <>
      <motion.div className="ball" id={styles.ballMove} {...motionProps.ballMove} />

      <main>
        <section className={`${styles.projectSection}`}>
          <motion.div className="ball ballRotate" id={styles.ball1} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball2} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball3} {...motionProps.ball} />

          <motion.div
            className={`${styles.title} ${styles.featured_title}  glass`}
            {...motionProps.mainContent}
          >
            <h1>Projetos em Destaque</h1>
          </motion.div>
          <motion.div className={`${styles.imgContainer} glass`} {...motionProps.mainContent}>
            <ProjectImg array={featuredArray} setIndex={setFeaturedIndex} index={featuredIndex} />
          </motion.div>
          <motion.div className={`${styles.textContainer} glass`} {...motionProps.mainContent}>
            <ProjectText array={featuredArray} index={featuredIndex} />
          </motion.div>
        </section>
        <section className={`${styles.projectSection}`}>
          <motion.div className="ball" id={styles.ball4} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball5} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball8} {...motionProps.ball} />

          <motion.div className={`${styles.title} glass`} {...motionProps.mainContent}>
            <h1>Projetos Front</h1>
          </motion.div>
          <motion.div className={`${styles.imgContainer} glass`} {...motionProps.mainContent}>
            <ProjectImg array={frontArray} setIndex={setFrontIndex} index={frontIndex} />
          </motion.div>
          <motion.div className={`${styles.textContainer} glass`} {...motionProps.mainContent}>
            <ProjectText array={frontArray} index={frontIndex} />
          </motion.div>
        </section>
        <section className={`${styles.projectSection}`}>
          <motion.div className="ball ballRotate" id={styles.ball1} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball2} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball7} {...motionProps.ball} />

          <motion.div className={`${styles.title} glass`} {...motionProps.mainContent}>
            <h1>Projetos Back</h1>
          </motion.div>
          <motion.div className={`${styles.imgContainer} glass`} {...motionProps.mainContent}>
            <ProjectImg array={backArray} setIndex={setBackIndex} index={backIndex} />
          </motion.div>
          <motion.div className={`${styles.textContainer} glass`} {...motionProps.mainContent}>
            <ProjectText array={backArray} index={backIndex} />
          </motion.div>
        </section>
      </main>
    </>
  );
}
