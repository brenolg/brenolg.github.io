import { motion } from 'framer-motion';
import React from 'react';
import myImg from '../images/brenoSobre.png';
import motionProps from '../utils/motionProps';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <motion.div className="ball" id={styles.ballMove} {...motionProps.ballMove} />

      <main>
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

        <section className={`${styles.relativSection}`}>
          <motion.div className="ball ballRotate" id={styles.ball4} {...motionProps.ball} />
          <motion.div className="ball" id={styles.ball5} {...motionProps.ball} />

          <div className={`${styles.professional_description} glass`}>
            <h2 className={`${styles.titles}`}>Na programação...</h2>
            <p className={`${styles.p} `}>
              Em especial, estou bastante interessado em UX/UI, que envolve a busca pela melhor
              experiência do usuário. Eu acredito que essa área se assemelha muito à lógica do MVP
              (Mínimo Produto Viável) do empreendedorismo, que tem como objetivo lançar um produto
              funcional com o mínimo de recursos possíveis, com foco específico na aceitação e
              experiência do público-alvo.
            </p>
            <br />
            <br />
            <p className={`${styles.p} `}>
              Conclui o curso da Trybe, empresa que disponibiliza mais de 1500 horas dentre Front
              End, Back End e Ciências de Dados. Desenvolvi mais de 20 projetos individuais e em
              grupos.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
