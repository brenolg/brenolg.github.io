import styles from './Nav.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Nav() {
	return (
		<nav id={styles.nav}>
			<button className={styles.btn}>
				<FaGithub className={styles.icons} />
			</button>

			<button className={styles.btn}>
				<FaLinkedin className={styles.icons} />
			</button>

			<button className={styles.btn}>
				<FaEnvelope className={styles.icons} />
			</button>
		</nav>
	);
}
