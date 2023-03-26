import React from 'react';
import Tilt from 'react-parallax-tilt';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Tecs from '../components/Tecs';
import fotoBreno from '../images/fotoBreno.png';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Nav />

        <div className="ball" id={styles.ball1} />
        <div className="ball" id={styles.ball2} />
        <div className="ball" id={styles.ball3} />
        <div className="ball" id={styles.ball4} />
        <div className="ball" id={styles.ball5} />
        <div className="ball" id={styles.ball6} />
        <div className="ball" id={styles.ball7} />

        <Tilt
          className={`${styles.profile} glass`}
          perspective={2250}
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={3000}
          glareEnable
          glareBorderRadius="50px"
          glareMaxOpacity={0.1}
          glareColor="rgb(189, 189, 189)"
        >
          <div className={styles.img_container}>
            <img className={styles.my_img} src={fotoBreno} alt="Foto Breno Lavalle Garrido" />
          </div>

          <div className={styles.text}>
            <h2>Breno Lavalle Garrido</h2>
            <small>Desenvolvedor Web Full-Stack </small>

            <p>
              Desenvolvedor com experiência em React, Redux, JavaScript, React Hooks,Context-api,
              Jest, React testing library, Docker, Node.js, MySQL, TypeScript e consumo de APIs
              REST. Curioso e fascinado pelos desafios lógicos que a programação promove. Também
              possui experiência em projetos gerenciados por Metodologias Ágeis. Estudante do curso
              Web Full-Stack da Trybe e cursando no momento backend.
            </p>
          </div>
        </Tilt>

        <section className={styles.hard_skils}>
          <Tilt
            className={` glass ${styles.tecs_container}`}
            perspective={2250}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          >
            <Tecs />
          </Tilt>

          <Tilt
            className={`${styles.repos_info}      glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          />
        </section>
      </main>
    </div>
  );
}
