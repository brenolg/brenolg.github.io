import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<header className={styles.glass}>
			<button>
				<Link
					className={styles.a}
					to={'/'}>
					HOME
				</Link>
			</button>

			<button>
				<Link
					className={styles.a}
					to={'/about'}>
					SOBRE
				</Link>
			</button>

			<button>
				<Link
					className={styles.a}
					to={'/projects'}>
					PROJETOS
				</Link>
			</button>
		</header>
	);
}
