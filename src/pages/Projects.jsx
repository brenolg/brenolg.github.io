import Header from '../components/Header';
import styles from './Projects.module.css';
import Nav from '../components/Nav';

export default function Projects() {
	return (
		<body className={styles.body}>
			<Header />
			<main>
				<Nav />
				<span className={styles.span}>Projects</span>
			</main>
		</body>
	);
}
