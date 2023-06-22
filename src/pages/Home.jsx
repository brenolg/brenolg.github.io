import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Techs from '../components/Techs';
import fotoBreno from '../images/fotoBreno.png';
import StarWars from '../images/star-wars.gif';
import motionProps from '../utils/motionProps';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div className="ball" id={styles.ballMove} {...motionProps.ballMove} />

      <main>
        <motion.div className="ball ballRotate" id={styles.ball1} {...motionProps.ball} />
        <section className={`${styles.profile_section}`}>
          <motion.div className="ball ballRotate" id={styles.ball2} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball3} {...motionProps.ball} />

          <div className={`${styles.profile_container}`}>
            <motion.div className={`${styles.profile} glass`} {...motionProps.mainContent}>
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
                  <a className={styles.link} href="mailto: brenolgar@gmail.com">
                    <button className={styles.btn} type="button">
                      Entrar em Contato
                    </button>
                  </a>
                  <a className={styles.link} href="mailto: brenolgar@gmail.com">
                    <button className={styles.btn} type="button">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.hard_skills}>
          <motion.div className="ball ballRotate" id={styles.ball4} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball5} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball6} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball7} {...motionProps.ball} />

          <motion.div className={`${styles.repos_preview} glass`} {...motionProps.mainContent}>
            <img src={StarWars} alt="Projects Gifts" />
            <button
              className={styles.btn}
              type="button"
              onClick={() => {
                navigate('/projects');
              }}
            >
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
