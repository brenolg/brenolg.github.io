import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Techs from '../components/Techs';
import fotoBreno from '../images/fotoBreno.png';
import StarWars from '../images/star-wars.gif';
import styles from './Home.module.css';
import motionProps from '../utils/motionProps';

export default function Home() {
  const route = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <>
      <div className="ball " id={styles.ballMove} />

      <main>
        <div className={`${styles.profile_container}`}>
          <motion.div className="ball" id={styles.ball1} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball2} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball3} {...motionProps.ball} />

          <motion.div className={`${styles.profile} glass`} {...motionProps.mainContent}>
            <div className={styles.img_border}>
              <img className={styles.my_img} src={fotoBreno} alt="Foto Breno Lavalle Garrido" />
            </div>
            <div className={styles.text}>
              <h2>Breno Lavalle Garrido</h2>
              <span>Desenvolvedor Web Full-Stack </span>

              <p>
                Desenvolvedor com experiência em React, Redux, JavaScript, React Hooks,Context-api,
                Jest, React testing library, Docker, Node.js, MySQL, TypeScript e consumo de APIs
                REST. Curioso e fascinado pelos desafios lógicos que a programação promove. Também
                possui experiência em projetos gerenciados por Metodologias Ágeis. Estudante do
                curso Web Full-Stack da Trybe e cursando no momento backend.
              </p>
              <div className={styles.profileBtns}>
                <button className={styles.btn} type="button">
                  Entrar em Contato
                </button>

                <button className={styles.btn} type="button">
                  Download CV
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <section className={styles.hard_skills}>
          <motion.div className="ball" id={styles.ball4} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball5} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball6} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball7} {...motionProps.ball} />

          <motion.div className={`${styles.repos_preview} glass`} {...motionProps.mainContent}>
            <img src={StarWars} alt="Projects Gifts" />
            <button className={styles.btn} type="button">
              Projects Page
            </button>
          </motion.div>

          <motion.div className={`${styles.stacks_container} glass`} {...motionProps.ball}>
            <Techs />
          </motion.div>
        </section>
      </main>
    </>
  );
}
