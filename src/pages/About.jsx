import { motion } from 'framer-motion';
import React from 'react';
import techImg from '../images/breno-tech.jpeg';
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

          <motion.div className={`${styles.img_container_2} glass`} {...motionProps.mainContent}>
            <img className={`${styles.my_img_2} glass`} src={techImg} alt="foto breno" />
          </motion.div>

          <div className={`${styles.professional_description} glass`}>
            <h2 className={`${styles.titles}`}>Na programação...</h2>
            <p className={`${styles.p} `}>
              Tenho um interesse particular em UX/UI, uma área dedicada à busca pela melhor
              experiência do usuário. Acredito que essa disciplina compartilha muitas semelhanças
              com a lógica do MVP (Mínimo Produto Viável) no empreendedorismo, que busca lançar um
              produto funcional com o mínimo de recursos possível, focando especialmente na
              aceitação e experiência do público-alvo.
            </p>
            <br />
            <br />
            <p className={`${styles.p} `}>
              Concluí o curso da Trybe, uma renomada empresa que oferece mais de 1500 horas de
              treinamento abrangendo Front End, Back End e Ciências de Dados. Durante o curso, tive
              a oportunidade de desenvolver mais de 20 projetos, tanto individualmente quanto em
              equipe. Meu foco principal foi a construção de interfaces de usuário otimizadas,
              utilizando tecnologias como React Js, React Router, Redux, Context API e Hooks. Também
              ganhei experiência em integração com APIs.
            </p>
            <br />
            <br />
            <p className={`${styles.p} `}>
              Além disso, explorei o desenvolvimento de APIs REST, utilizando programação orientada
              a objetos (POO) , arquitetura Model-Service-Controller (MSC), Node.js e Express. Tive
              a oportunidade de trabalhar com bancos de dados SQL e NoSQL, como MySQL/Sequelize e
              MongoDB/Mongoose.
            </p>
            <br />
            <br />
            <p className={`${styles.p} `}>
              Tenho proficiência em Python e experiência na realização de testes usando bibliotecas
              como Jest, React Testing Library, Mocha e Chai. Também sou familiarizado com o uso de
              Linux, GitHub, Docker e CI/CD, seguindo boas práticas de programação para garantir
              códigos limpos, legíveis, reutilizáveis e de fácil manutenção.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
