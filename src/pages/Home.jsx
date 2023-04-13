import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
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
      <div className="ball asideContent" id={styles.ballMove} />

      <main>
        <div className={`${styles.profile_container}`}>
          <div className="ball asideContent" id={styles.ball1} {...motionProps.ballMove} />
          <div className="ball asideContent" id={styles.ball2} {...motionProps.ballMove} />
          <div className="ball asideContent" id={styles.ball3} {...motionProps.ballMove} />

          <Tilt {...tiltProps.defaultProps}>
            <div className={`${styles.profile} glass mainContent`}>
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
            </div>
          </Tilt>
        </div>

        <section className={styles.hard_skills}>
          <div className="ball asideContent" id={styles.ball4} />
          <div className="ball asideContent" id={styles.ball5} />
          <div className="ball asideContent" id={styles.ball6} />
          <div className="ball asideContent" id={styles.ball7} />

          <Tilt {...tiltProps.defaultProps}>
            <div className={`${styles.repos_preview} glass mainContent`} {...motionProps.ballMove}>
              <img src={StarWars} alt="Projects Gifts" />
              <button className={styles.btn} type="button">
                Projects Page
              </button>
            </div>
          </Tilt>

          <Tilt {...tiltProps.techContainerProps}>
            <div className={` glass mainContent${styles.stacks_container}`}>
              <Techs />
            </div>
          </Tilt>
        </section>
      </main>
    </>
  );
}
