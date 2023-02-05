import Header from '../components/Header';
import styles from './Projects.module.css';

export default function Projects() {
	return (
		<body className={styles.body}>
			<Header />
			<main>
				<span className={styles.span}>Projects</span>
			</main>
		</body>
	);
}
