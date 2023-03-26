import React from 'react';
import Tilt from 'react-parallax-tilt';
import Header from '../components/Header';
import Nav from '../components/Nav';
import styles from './About.module.css';

export default function About() {
  return (
    <body className={styles.body}>
      <Header />
      <main>
        <Nav />
        <section className={`${styles.section1}`}>
          <Tilt
            className={`${styles.my_img} glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          >
            <div className={styles.img_container} />
          </Tilt>

          <Tilt
            className={`${styles.text1} glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          >
            <div className={styles.img_container} />
          </Tilt>
        </section>

        <Tilt
          className={`${styles.text2} glass`}
          perspective={2250}
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={3000}
          glareEnable
          glareBorderRadius="50px"
          glareMaxOpacity={0.1}
          glareColor="rgb(189, 189, 189)"
        >
          <div className={styles.img_container} />
        </Tilt>
      </main>
    </body>
  );
}
