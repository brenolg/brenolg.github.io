import Header from '../components/Header';
import styles from './About.module.css';
import Nav from '../components/Nav';
import Tilt from 'react-parallax-tilt';

export default function About() {
	return (
		<body className={styles.body}>
			<Header />
			<main>
				<Nav />
				<section className={`${styles.section1}`}>
					<Tilt
						className={`${styles.my_img} ${styles.glass}`}
						perspective={2250}
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}>
						<div className={styles.img_container}></div>
					</Tilt>

					<Tilt
						className={`${styles.text1} ${styles.glass}`}
						perspective={2250}
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}>
						<div className={styles.img_container}></div>
					</Tilt>
				</section>

				<Tilt
					className={`${styles.text2} ${styles.glass}`}
					perspective={2250}
					tiltMaxAngleX={3}
					tiltMaxAngleY={3}
					transitionSpeed={3000}
					glareEnable={true}
					glareBorderRadius={'50px'}
					glareMaxOpacity={0.1}
					glareColor={'rgb(189, 189, 189)'}>
					<div className={styles.img_container}></div>
				</Tilt>
			</main>
		</body>
	);
}
