import './Nav.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Nav() {
	return (
		<nav id='navContainer'>
			<button className='navBtn'>
				<FaGithub className='navIcons' />
			</button>

			<button className='navBtn'>
				<FaLinkedin className='navIcons' />
			</button>

			<button className='navBtn'>
				<FaEnvelope className='navIcons' />
			</button>
		</nav>
	);
}
