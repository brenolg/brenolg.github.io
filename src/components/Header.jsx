import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.glass}>
			<button>HOME</button>
			<button>SOBRE</button>
			<button>PROJETOS</button>
		</header>
	);
}
