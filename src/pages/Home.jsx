import './Home.css';
import fotoBreno from '../images/fotoBreno.png';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Tecs from '../components/Tecs';
import Tilt from 'react-parallax-tilt';

export default function Home() {
	return (
		<body>
			<Header />
			<main>
				<Nav />

				<div
					class='ball'
					id='ball1'></div>
				<div
					class='ball'
					id='ball2'></div>
				<div
					class='ball'
					id='ball3'></div>
				<div
					class='ball'
					id='ball4'></div>
				<div
					class='ball'
					id='ball5'></div>
				<div
					class='ball'
					id='ball6'></div>
				<div
					class='ball'
					id='ball7'></div>

				<Tilt
					className='profile glass'
					perspective={2250}
					tiltMaxAngleX={3}
					tiltMaxAngleY={3}
					transitionSpeed={3000}
					glareEnable={true}
					glareBorderRadius={'50px'}
					glareMaxOpacity={0.1}
					glareColor={'rgb(189, 189, 189)'}>
					<div class='img_container'>
						<img
							class='my_img'
							src={fotoBreno}
							alt='Foto Breno Lavalle Garrido'
						/>
					</div>

					<div class='text'>
						<h2>Breno Lavalle Garrsido</h2>

						<small>web dev</small>
						<h3>Sobre mimaaaa</h3>
					</div>
				</Tilt>

				<section class='hard_skils'>
					<Tilt
						className='glass tecs_container'
						perspective={2250}
						tiltMaxAngleX={5}
						tiltMaxAngleY={5}
						transitionSpeed={3000}
						glareEnable={true}
						glareBorderRadius={'50px'}
						glareMaxOpacity={0.1}
						glareColor={'rgb(189, 189, 189)'}>
						<Tecs />
					</Tilt>

					<Tilt
						className='repos_info glass'
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
