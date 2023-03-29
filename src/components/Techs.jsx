import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiJavascript } from 'react-icons/di';
import { FaBootstrap, FaCss3Alt, FaDocker, FaGithub, FaReact } from 'react-icons/fa';
import { FiFigma, FiSlack } from 'react-icons/fi';
import { GrMysql } from 'react-icons/gr';
import { SiEslint, SiGimp, SiJest, SiRedux, SiSteam, SiTestinglibrary } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import tiltProps from '../utils/tiltProps';
import styles from './Tecs.module.css';

export default function Techs() {
  return (
    <div className={styles.container}>
      <dl>
        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <DiJavascript className={styles.techs} />
          </dt>
          <dd>Javascript</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FaReact className={styles.techs} />
          </dt>
          <dd>React</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <AiFillHtml5 className={styles.techs} />
          </dt>
          <dd>HTML</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FaCss3Alt className={styles.techs} />
          </dt>
          <dd>CSS</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FaGithub className={styles.techs} />
          </dt>
          <dd>Git Hub</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <SiJest className={styles.techs} />
          </dt>
          <dd>Jest</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <SiTestinglibrary className={styles.techs} />
          </dt>
          <dd>RTL</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FaDocker className={styles.techs} />
          </dt>
          <dd>Docker</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <GrMysql className={styles.techs} />
          </dt>
          <dd>SQL</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <SiRedux className={styles.techs} />
          </dt>
          <dd>Redux</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <SiEslint className={styles.techs} />
          </dt>
          <dd>Lint</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FaBootstrap className={styles.techs} />
          </dt>
          <dd>Bootstrap</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FiFigma className={styles.techs} />
          </dt>
          <dd>Figma</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <SiGimp className={styles.techs} />
          </dt>
          <dd>GIMP</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <FiSlack className={styles.techs} />
          </dt>
          <dd>Slack</dd>
        </Tilt>

        <Tilt className={styles.tilt} {...tiltProps.techsProps}>
          <dt>
            <SiSteam className={styles.techs} />
          </dt>
          <dd>Steam</dd>
        </Tilt>
      </dl>
    </div>
  );
}
