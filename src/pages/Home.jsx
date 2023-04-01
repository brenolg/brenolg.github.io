import React from 'react';
import Tilt from 'react-parallax-tilt';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Techs from '../components/Techs';
import fotoBreno from '../images/fotoBreno.png';
import StarWars from '../images/star-wars.gif';
import styles from './Home.module.css';
import tiltProps from '../utils/tiltProps';

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

        <Tilt className={`${styles.profile} glass`} {...tiltProps.homeDefaultProps}>
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
              possui experiência em projetos gerenciados por Metodologias Ágeis. Estudante do curso
              Web Full-Stack da Trybe e cursando no momento backend.
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
        </Tilt>

        <section className={styles.hard_skills}>
          <Tilt className={`${styles.repos_preview} glass`} {...tiltProps.homeDefaultProps}>
            <img src={StarWars} alt="Projects Gifts" />
            <button className={styles.btn} type="button">
              Projects Page
            </button>
          </Tilt>

          <Tilt className={` glass ${styles.stacks_container}`} {...tiltProps.techContainerProps}>
            <Techs />
          </Tilt>
        </section>
      </main>
    </div>
  );
}
