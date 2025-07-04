/* eslint-disable max-len */
import { motion } from 'framer-motion';
import React from 'react';
import techImg from '../images/breno-tech.png';
import myImg from '../images/brenoSobre.png';
import motionProps from '../utils/motionProps';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <motion.div className="ball" id={styles.ballMove} {...motionProps.ballMove} />

      <main>
        <section className={`${styles.relativSection}`}>
          <motion.div className="ball ballRotate" id={styles.ball4} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball5} {...motionProps.ball} />

          <motion.div className={`${styles.img_container_2} glass`} {...motionProps.mainContent}>
            <img className={`${styles.my_img_2} glass`} src={techImg} alt="foto breno" />
          </motion.div>
          <div className={`${styles.professional_description} glass`}>
            <h2 className={`${styles.titles}`}>Na programação...</h2>
            <p className={`${styles.p}`}>
              Atuo como desenvolvedor Front End, com foco em React e TypeScript, nas empresas pelas quais passei, sempre buscando entregar interfaces modernas, performáticas e centradas na experiência do usuário.
              Sou formado pela Trybe, onde passei por mais de 1500 horas de formação intensiva em desenvolvimento web, com foco em Front End, Back End e Ciência de Dados. Durante esse período, desenvolvi mais de 20 projetos práticos — individuais e em equipe — sempre priorizando a qualidade da interface e a performance. Trabalhei com tecnologias como React JS, React Router, Redux, Context API, Hooks e integração com APIs REST.
            </p>
            <br />
            <br />
            <p className={`${styles.p}`}>
              No Back End, atuei na criação de APIs utilizando Node.js, Express, arquitetura MSC e princípios de POO. Também trabalhei com bancos de dados relacionais e não-relacionais, como MySQL (via Sequelize) e MongoDB (via Mongoose), consolidando minha experiência com diferentes formas de persistência de dados.
            </p>
            <br />
            <br />
            <p className={`${styles.p}`}>
              Tenho familiaridade com o ecossistema DevOps, incluindo Docker, GitHub, CI/CD e ambientes Linux. Valorizo testes como parte fundamental do ciclo de desenvolvimento, com experiência em Jest, React Testing Library, Mocha e Chai. Busco sempre aplicar boas práticas de código limpo, visando legibilidade, manutenibilidade e escalabilidade.
            </p>
          </div>
        </section>

        <section className={`${styles.img_section}`}>
          <motion.div className="ball ballRotate" id={styles.ball1} {...motionProps.ball} />
          <motion.div className="ball ballRotate" id={styles.ball2} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball3} {...motionProps.ball} />

          <motion.div className={`${styles.img_container} glass`} {...motionProps.mainContent}>
            <img className={`${styles.my_img} glass`} src={myImg} alt="foto breno" />
          </motion.div>

          <motion.div className={`${styles.main_description} glass`} {...motionProps.mainContent}>
            <h2 className={`${styles.titles}`}>Vida Profissional</h2>
            <p className={`${styles.p}`}>
              Fui empreendedor por mais de 10 anos com produtos relacionados a cerâmica, plantas
              ornamentais e kokedamas. Minha formação em biologia e experiência em transformar meus
              hobbies em produtos me proporcionaram uma ampla compreensão do processo de criação de
              produtos e do que é necessário para fazer um negócio prosperar. No entanto, o meu
              interesse em programação surgiu a partir dos desafios diários de lógica que essa área
              oferece.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}
