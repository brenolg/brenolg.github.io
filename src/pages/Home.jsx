import styles from "./Home.module.css";
import fotoBreno from "../images/fotoBreno.png";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Tecs from "../components/Tecs";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Nav />

        <div className="ball" id={styles.ball1}></div>
        <div className="ball" id={styles.ball2}></div>
        <div className="ball" id={styles.ball3}></div>
        <div className="ball" id={styles.ball4}></div>
        <div className="ball" id={styles.ball5}></div>
        <div className="ball" id={styles.ball6}></div>
        <div className="ball" id={styles.ball7}></div>

        <Tilt
          className={`${styles.profile} glass`}
          perspective={2250}
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          transitionSpeed={3000}
          glareEnable={true}
          glareBorderRadius={"50px"}
          glareMaxOpacity={0.1}
          glareColor={"rgb(189, 189, 189)"}>
          <div className={styles.img_container}>
            <img
              className={styles.my_img}
              src={fotoBreno}
              alt="Foto Breno Lavalle Garrido"
            />
          </div>

          <div className={styles.text}>
            <h2>Breno Lavalle Garrsido</h2>

            <small>web dev</small>
            <h3>Sobre mimaaaa</h3>
          </div>
        </Tilt>

        <section className={styles.hard_skils}>
          <Tilt
            className={` glass ${styles.tecs_container}`}
            perspective={2250}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            transitionSpeed={3000}
            glareEnable={true}
            glareBorderRadius={"50px"}
            glareMaxOpacity={0.1}
            glareColor={"rgb(189, 189, 189)"}>
            <Tecs />
          </Tilt>

          <Tilt
            className={`${styles.repos_info}      glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable={true}
            glareBorderRadius={"50px"}
            glareMaxOpacity={0.1}
            glareColor={"rgb(189, 189, 189)"}></Tilt>
        </section>
      </main>
    </div>
  );
}
