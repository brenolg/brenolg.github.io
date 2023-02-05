import Header from '../components/Header';
import styles from './About.module.css';

export default function About() {
	return (
		<body className={styles.body}>
			<Header />
			<main>
				<span className={styles.span}>About</span>
			</main>
		</body>
	);
}
