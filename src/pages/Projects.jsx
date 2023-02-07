import Header from '../components/Header';
import styles from './Projects.module.css';
import Nav from '../components/Nav';
import Tilt from 'react-parallax-tilt';

export default function Projects() {
	return (
		<body className={styles.body}>
			<Header />
			<main>
				<Nav />
				<section className={`${styles.sectionFront}`}>
					<Tilt
						className={`${styles.imgFront} ${styles.glass}`}
						perspective={2250}
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}></Tilt>

					<Tilt
						className={`${styles.textFront} ${styles.glass}`}
						perspective={2250}
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}></Tilt>
				</section>

				<section className={`${styles.sectionBack}`}>
					<Tilt
						className={`${styles.imgBack} ${styles.glass}`}
						perspective={2250}
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}></Tilt>

					<Tilt
						className={`${styles.textBack} ${styles.glass}`}
						perspective={2250}
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}></Tilt>
				</section>
			</main>
		</body>
	);
}
