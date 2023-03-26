import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiJavascript } from 'react-icons/di';
import { FaBootstrap, FaCss3Alt, FaDocker, FaGithub, FaReact } from 'react-icons/fa';
import { FiFigma, FiSlack } from 'react-icons/fi';
import { GrMysql } from 'react-icons/gr';
import { SiEslint, SiGimp, SiJest, SiRedux, SiSteam, SiTestinglibrary } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import styles from './Tecs.module.css';

export default function Tecs() {
  return (
    <div className={styles.container}>
      <dl>
        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <DiJavascript className={styles.tecs} />
          </dt>
          <dd>Javascript</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FaReact className={styles.tecs} />
          </dt>
          <dd>React</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <AiFillHtml5 className={styles.tecs} />
          </dt>
          <dd>HTML</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FaCss3Alt className={styles.tecs} />
          </dt>
          <dd>CSS</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FaGithub className={styles.tecs} />
          </dt>
          <dd>Git Hub</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <SiJest className={styles.tecs} />
          </dt>
          <dd>Jest</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <SiTestinglibrary className={styles.tecs} />
          </dt>
          <dd>RTL</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FaDocker className={styles.tecs} />
          </dt>
          <dd>Docker</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <GrMysql className={styles.tecs} />
          </dt>
          <dd>SQL</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <SiRedux className={styles.tecs} />
          </dt>
          <dd>Redux</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <SiEslint className={styles.tecs} />
          </dt>
          <dd>Lint</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FaBootstrap className={styles.tecs} />
          </dt>
          <dd>Bootstrap</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FiFigma className={styles.tecs} />
          </dt>
          <dd>Figma</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <SiGimp className={styles.tecs} />
          </dt>
          <dd>GIMP</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <FiSlack className={styles.tecs} />
          </dt>
          <dd>Slack</dd>
        </Tilt>

        <Tilt
          perspective={150}
          scale={1.2}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          transitionSpeed={3000}
          className={styles.tilt}
        >
          <dt>
            <SiSteam className={styles.tecs} />
          </dt>
          <dd>Steam</dd>
        </Tilt>
      </dl>
    </div>
  );
}
