import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import styles from './About.module.css';
import tiltProps from '../utils/tiltProps';
import myImg from '../images/brenoSobre.png';
import '../global.css';
import motionProps from '../utils/motionProps';

export default function About() {
  const route = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <>
      <motion.div className="ball" id={styles.ballMove} {...motionProps.ballMove} />

      <main>
        <section className={`${styles.img_section}`}>
          <motion.div className="ball" id={styles.ball1} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball2} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball3} {...motionProps.ballMove} />

          <Tilt {...tiltProps.myImgProps}>
            <motion.div className={`${styles.img_container} glass`} {...motionProps.mainContent}>
              <img className={`${styles.my_img} glass`} src={myImg} alt="foto breno" />
            </motion.div>
          </Tilt>

          <Tilt {...tiltProps.defaultProps}>
            <motion.div className={`${styles.main_description} glass`} {...motionProps.mainContent}>
              <h2 className={`${styles.titles}`}>Vida Profissional</h2>
              <p className={`${styles.p}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis commodi
                numquam quod ea pariatur libero totam eius, id vero repellat neque ab, dignissimos
                nobis nam quasi dolore, repudiandae delectus hic! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis, nulla! Nihil, temporibus! Fuga at,
                voluptatum deserunt, dolores voluptates tempore necessitatibus corrupti, temporibus
                rerum sapiente laudantium odio itaque! Nobis, quidem neque. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Excepturi quis exercitationem ipsa nam explicabo
                quaerat, voluptatem alias! Libero dolorum quia molestiae qui ducimus perferendis
                labore possimus, ad non, voluptatem nesciunt?
              </p>
            </motion.div>
          </Tilt>
        </section>

        <section className={`${styles.relativSection}`}>
          <motion.div className="ball" id={styles.ball4} {...motionProps.ballMove} />
          <motion.div className="ball" id={styles.ball5} {...motionProps.ballMove} />

          <Tilt {...tiltProps.defaultProps}>
            <motion.div
              className={`${styles.professional_description} glass`}
              {...motionProps.mainContent}
            >
              <h2 className={`${styles.titles}`}>Curiosidades...</h2>
              <p className={`${styles.p} `}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis commodi
                numquam quod ea pariatur libero totam eius, id vero repellat neque ab, dignissimos
                nobis nam quasi dolore, repudiandae delectus hic! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis, nulla! Nihil, temporibus! Fuga at,
                voluptatum deserunt, dolores voluptates tempore necessitatibus corrupti, temporibus
                rerum sapiente laudantium odio itaque! Nobis, quidem neque. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Excepturi quis exercitationem ipsa nam explicabo
                quaerat, voluptatem alias! Libero dolorum quia molestiae qui ducimus perferendis
                labore possimus, ad non, voluptatem nesciunt?
              </p>
            </motion.div>
          </Tilt>
        </section>
      </main>
    </>
  );
}
