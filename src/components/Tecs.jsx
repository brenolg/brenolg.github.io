import styles from './Tecs.module.css';
import { GrMysql } from 'react-icons/gr';
import {
	FaReact,
	FaCss3Alt,
	FaGithub,
	FaDocker,
	FaBootstrap,
} from 'react-icons/fa';

import { DiJavascript } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { FiFigma, FiSlack } from 'react-icons/fi';
import {
	SiJest,
	SiTestinglibrary,
	SiRedux,
	SiEslint,
	SiGimp,
	SiSteam,
} from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

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
					className={styles.tilt}>
					<dt>
						<DiJavascript className={styles.tecs} />
						<dd>Javascript</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FaReact className={styles.tecs} />
						<dd>React</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<AiFillHtml5 className={styles.tecs} />
						<dd>HTML</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FaCss3Alt className={styles.tecs} />
						<dd>CSS</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FaGithub className={styles.tecs} />
						<dd>Git Hub</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<SiJest className={styles.tecs} />
						<dd>Jest</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<SiTestinglibrary className={styles.tecs} />
						<dd>RTL</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FaDocker className={styles.tecs} />
						<dd>Docker</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<GrMysql className={styles.tecs} />
						<dd>SQL</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<SiRedux className={styles.tecs} />
						<dd>Redux</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<SiEslint className={styles.tecs} />
						<dd>Lint</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FaBootstrap className={styles.tecs} />
						<dd>Bootstrap</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FiFigma className={styles.tecs} />
						<dd>Figma</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<SiGimp className={styles.tecs} />
						<dd>GIMP</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<FiSlack className={styles.tecs} />
						<dd>Slack</dd>
					</dt>
				</Tilt>

				<Tilt
					perspective={150}
					scale={1.2}
					tiltMaxAngleX={40}
					tiltMaxAngleY={40}
					transitionSpeed={3000}
					className={styles.tilt}>
					<dt>
						<SiSteam className={styles.tecs} />
						<dd>Steam</dd>
					</dt>
				</Tilt>
			</dl>
		</div>
	);
}
