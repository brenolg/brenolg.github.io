import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Techs from '../components/Techs';
import fotoBreno from '../images/fotoBreno.png';
import StarWars from '../images/star-wars.gif';
import styles from './Home.module.css';
import tiltProps from '../utils/tiltProps';
import '../global.css';
import motionProps from '../utils/motionProps';

export default function Home() {
  const route = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <>
      <motion.div className="ball" id={styles.ballMove} {...motionProps.ballMove} />

      <main>
        <div className={`${styles.profile_container}`}>
          <motion.div className="ball" id={styles.ball1} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball2} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball3} {...motionProps.ballMove} />

          <Tilt {...tiltProps.defaultProps}>
            <motion.div className={`${styles.profile} glass`} {...motionProps.ballMove}>
              <div className={styles.img_border}>
                <img className={styles.my_img} src={fotoBreno} alt="Foto Breno Lavalle Garrido" />
              </div>
              <div className={styles.text}>
                <h2>Breno Lavalle Garrido</h2>
                <span>Desenvolvedor Web Full-Stack </span>

                <p>
                  Desenvolvedor com experiência em React, Redux, JavaScript, React
                  Hooks,Context-api, Jest, React testing library, Docker, Node.js, MySQL, TypeScript
                  e consumo de APIs REST. Curioso e fascinado pelos desafios lógicos que a
                  programação promove. Também possui experiência em projetos gerenciados por
                  Metodologias Ágeis. Estudante do curso Web Full-Stack da Trybe e cursando no
                  momento backend.
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
          </Tilt>
        </div>

        <section className={styles.hard_skills}>
          <motion.div className="ball" id={styles.ball4} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball5} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball6} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball7} {...motionProps.ballMove} />

          <Tilt {...tiltProps.defaultProps}>
            <motion.div className={`${styles.repos_preview} glass`} {...motionProps.ballMove}>
              <img src={StarWars} alt="Projects Gifts" />
              <button className={styles.btn} type="button">
                Projects Page
              </button>
            </motion.div>
          </Tilt>

          <Tilt className={` glass ${styles.stacks_container}`} {...tiltProps.techContainerProps}>
            <motion.div className={` glass ${styles.stacks_container}`} {...motionProps.ballMove}>
              <Techs />
            </motion.div>
          </Tilt>
        </section>
      </main>
    </>
  );
}
