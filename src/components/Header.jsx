import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
	let navigate = useNavigate();

	return (
		<header className={styles.glass}>
			<button
				className={styles.a}
				onClick={() => {
					navigate('/');
				}}>
				HOME
			</button>

			<button
				className={styles.a}
				onClick={() => {
					navigate('/about');
				}}>
				SOBRE
			</button>

			<button
				className={styles.a}
				onClick={() => {
					navigate('/projects');
				}}>
				PROJETOS
			</button>
		</header>
	);
}
