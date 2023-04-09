import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import styles from './About.module.css';
import tiltProps from '../utils/tiltProps';
import myImg from '../images/brenoSobre.png';
import '../global.css';

export default function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{
        width: 0,
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      animate={{
        width: '100%',
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: {
          duration: 1,
        },
      }}
    >
      <div className="ball" id={styles.ballMove} />

      <main>
        <section className={`${styles.img_section}`}>
          <div className="ball" id={styles.ball1} />
          <div className="ball" id={styles.ball2} />
          <div className="ball" id={styles.ball3} />

          <Tilt className={`${styles.img_container} glass`} {...tiltProps.myImgProps}>
            <img className={`${styles.my_img} glass`} src={myImg} alt="foto breno" />
          </Tilt>

          <Tilt className={`${styles.main_description} glass`} {...tiltProps.defaultProps}>
            <h2 className={`${styles.titles}`}>Vida Profissional</h2>
            <p className={`${styles.p}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis commodi numquam
              quod ea pariatur libero totam eius, id vero repellat neque ab, dignissimos nobis nam
              quasi dolore, repudiandae delectus hic! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facilis, nulla! Nihil, temporibus! Fuga at, voluptatum deserunt,
              dolores voluptates tempore necessitatibus corrupti, temporibus rerum sapiente
              laudantium odio itaque! Nobis, quidem neque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi quis exercitationem ipsa nam explicabo quaerat, voluptatem
              alias! Libero dolorum quia molestiae qui ducimus perferendis labore possimus, ad non,
              voluptatem nesciunt?
            </p>
          </Tilt>
        </section>

        <section className={`${styles.relativSection}`}>
          <div className="ball" id={styles.ball4} />
          <div className="ball" id={styles.ball5} />

          <Tilt className={`${styles.professional_description} glass`} {...tiltProps.defaultProps}>
            <h2 className={`${styles.titles}`}>Curiosidades...</h2>
            <p className={`${styles.p} `}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis commodi numquam
              quod ea pariatur libero totam eius, id vero repellat neque ab, dignissimos nobis nam
              quasi dolore, repudiandae delectus hic! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facilis, nulla! Nihil, temporibus! Fuga at, voluptatum deserunt,
              dolores voluptates tempore necessitatibus corrupti, temporibus rerum sapiente
              laudantium odio itaque! Nobis, quidem neque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi quis exercitationem ipsa nam explicabo quaerat, voluptatem
              alias! Libero dolorum quia molestiae qui ducimus perferendis labore possimus, ad non,
              voluptatem nesciunt?
            </p>
          </Tilt>
        </section>
      </main>
    </motion.div>
  );
}
