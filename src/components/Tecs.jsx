import './Tecs.css';
import { GrMysql }  from "react-icons/gr";
import { FaReact, FaCss3Alt, FaGithub, FaDocker, FaBootstrap }  from "react-icons/fa";
import { DiJavascript }  from "react-icons/di";
import { AiFillHtml5 }  from "react-icons/ai";
import { FiFigma, FiSlack}  from "react-icons/fi";
import { SiJest , SiTestinglibrary, SiRedux, SiEslint, SiGimp, SiSteam}  from "react-icons/si";
import Tilt from 'react-parallax-tilt'

export default function Tecs() {

  return (
  
    <div className='tecs-container'>
      <dl>
        <Tilt 
          perspective={150}
        scale={1.2}
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        transitionSpeed={3000} 
        className='tilt'
            >
              <dt><DiJavascript className='tecs'/>
              <dd>Javascript</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FaReact className='tecs'/>
              <dd>React</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><AiFillHtml5 className='tecs'/>
              <dd>HTML</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FaCss3Alt className='tecs'/>
              <dd>CSS</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FaGithub className='tecs'/>
              <dd>Git Hub</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><SiJest className='tecs'/>
              <dd>Jest</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><SiTestinglibrary className='tecs'/>
              <dd className='dd'>RTL</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FaDocker className='tecs'/>
              <dd>Docker</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><GrMysql className='tecs'/>
              <dd>SQL</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><SiRedux className='tecs'/>
              <dd>Redux</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><SiEslint className='tecs'/>
              <dd>Lint</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FaBootstrap className='tecs'/>
              <dd>Bootstrap</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FiFigma className='tecs'/>
              <dd>Figma</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><SiGimp className='tecs'/>
              <dd>GIMP</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><FiSlack className='tecs'/>
              <dd>Slack</dd>
              </dt>
            </Tilt>

            <Tilt 
            perspective={150}
            scale={1.2}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            transitionSpeed={3000} 
            className='tilt'
            >
              <dt><SiSteam className='tecs'/>
              <dd>Steam</dd>
              </dt>
            </Tilt>

      </dl>  
    </div>
  );
}
