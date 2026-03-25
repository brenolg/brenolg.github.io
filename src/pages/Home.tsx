import { motion } from 'framer-motion';
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
      <motion.div
        className="ball"
        id={styles.ballMove}
        {...motionProps.ballMove}
      />

      <main>
        <motion.div
          className="ball ballRotate"
          id={styles.ball1}
          {...motionProps.ball}
        />
        <section className={`${styles.profile_section}`}>
          <motion.div
            className="ball ballRotate"
            id={styles.ball2}
            {...motionProps.ball}
          />
          <motion.div
            className="ball"
            id={styles.ball3}
            {...motionProps.ball}
          />

          <div className={`${styles.profile_container}`}>
            <motion.div
              className={`${styles.profile} glass`}
              {...motionProps.mainContent}
            >
              <div className={styles.img_border}>
                <img
                  className={styles.my_img}
                  src={fotoBreno}
                  loading="eager"
                  alt="Foto Breno Lavalle Garrido"
                />
              </div>
              <div className={styles.text}>
                <h2>Breno Lavalle Garrido</h2>
                <span>Desenvolvedor Full-Stack </span>

                <p>
                  Desenvolvedor Full Stack com foco em Front-End e Mobile.
                  Possuo experiência no desenvolvimento e manutenção de
                  aplicações utilizando JavaScript, TypeScript, React e React
                  Native, além de conhecimento em tecnologias como Next.js,
                  Node.js, Angular, Docker e bancos de dados SQL e NoSQL. Atuo
                  na construção de interfaces modernas, integração com APIs e
                  desenvolvimento de aplicações escaláveis, sempre com foco em
                  performance, usabilidade e experiência do usuário.
                </p>
                <p>
                  Ao longo da minha trajetória, trabalhei em colaboração com
                  equipes multidisciplinares de back-end, design e produto,
                  participando do desenvolvimento de novas funcionalidades,
                  manutenção de sistemas existentes e melhoria contínua das
                  aplicações. Busco sempre aplicar boas práticas de engenharia
                  de software, código limpo, componentização e organização de
                  arquitetura para garantir soluções sustentáveis e de fácil
                  manutenção.
                </p>

                <div className={styles.profileBtns}>
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
          <motion.div
            className="ball ballRotate"
            id={styles.ball4}
            {...motionProps.ball}
          />
          <motion.div
            className="ball ballRotate"
            id={styles.ball5}
            {...motionProps.ball}
          />
          <motion.div
            className="ball ballRotate"
            id={styles.ball6}
            {...motionProps.ball}
          />
          <motion.div
            className="ball ballRotate"
            id={styles.ball7}
            {...motionProps.ball}
          />

          <motion.div
            className={`${styles.repos_preview} glass`}
            {...motionProps.mainContent}
          >
            <img src={homeGif} alt="Projects Gifts" loading="eager" />
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

          <motion.div
            className={`${styles.stacks_container} glass`}
            {...motionProps.ball}
          >
            <Techs />
          </motion.div>
        </section>
      </main>
    </>
  );
}
