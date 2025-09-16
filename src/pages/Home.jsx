import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Techs from '../components/Techs';
import fotoBreno from '../images/fotoBreno.png';
import homeGif from '../images/homeGif.gif';
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
                  Desenvolvedor com experiência em React, React Native, Redux, JavaScript,
                  TypeScript,
                  Node.js, Express e MySQL, com sólida atuação no consumo e construção de APIs REST.
                  Tenho vivência com Docker, Python, Jest e React Testing Library, aplicando
                  práticas de
                  Metodologias Ágeis em projetos colaborativos.
                </p>
                <p>
                  Minha atuação é focada no front-end, desenvolvendo interfaces modernas,
                  performáticas e intuitivas em React e React Native. Sou curioso,
                  apaixonado por desafios lógicos e motivado a transformar ideias em soluções
                  eficientes e escaláveis.
                </p>
                <div className={styles.profileBtns}>
                  <a
                    className={styles.link}
                    href="mailto: brenolgar@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className={styles.btn} type="button">
                      Entrar em Contato
                    </button>
                  </a>
                  <a
                    className={styles.link}
                    href="https://drive.google.com/file/d/1qDFuvqws2-xjyKOAtuoKVBkviimEKGU9/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
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
            <img src={homeGif} alt="Projects Gifts" />
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
