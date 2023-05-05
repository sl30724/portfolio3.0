import { Link } from "react-scroll";
import { Icon } from '@iconify-icon/react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import ProjectGallery from './ProjectGallery';
import Bio from './Bio';
import Scene from './Scene';
import Nav from './Nav';

function App() {

  return (
    <div className="App" id='outer-container'>
      <Nav />

      <main id='page-wrap'>
        <section className="Content" id="Intro">
          <div id="scene-container">
            <Canvas shadows orthographic camera={{ position: [5, 3, 10], zoom: 50 }} gl={{ preserveDrawingBuffer: true }} >
              <color attach="background" args={["#FFFBFF"]} />
              <ambientLight intensity={0.6} />
              <directionalLight castShadow position={[2.5, 12, 12]} intensity={4} />
              <Scene />
            </Canvas>
          </div>
          <div className="Intro-header">
            <div className="name">
              <h1>Hi, I'm Sandy</h1>
              <p className='subtitle profession'>Product Designer, UX/UI Developer</p>
              <p>
                I design and build joyful digital experiences that tell meaningful stories, striking the perfect balance between accessibility and aesthetics.
              </p>
            </div>
            <div className="status">
              <ul>
                <li><p className='small'><span className='title'>Currently:</span> Seeking exciting full-time positions.</p></li>
                <li><p className='small'><span className='title'>Recently:</span> Graduated with an MS in Creative Tech & Design from CU Boulder.</p></li>
                <li><p className='small'><span className='title'>Always:</span> Working on side projects and learning new things.</p></li>
              </ul>
            </div>
            <div className="socialmedia">
              <a href="https://www.linkedin.com/in/meihsuan-lee/" target="_blank" rel="noopener noreferrer" title='LinkedIn Profile'><Icon icon="ri:linkedin-fill" style={{ fontSize: '26px' }} className='social-icon' label='LinkedIn icon' /></a>
              <a href="https://www.behance.net/sandylee17" target="_blank" rel="noopener noreferrer" title='Behance Profile'><Icon icon="ion:logo-behance" style={{ fontSize: '26px' }} className='social-icon' label='Behance icon' /></a>
              <a href="mailto:work@sandylee.site" title="Send an email"><Icon icon="material-symbols:mail" style={{ fontSize: '26px' }} className='social-icon' label='Mail icon' /></a>
            </div>
            <div className='arrow-container'>
              <Link tabIndex={0} to='Projects' spy={true} smooth={true} duration={500}><Icon icon="material-symbols:arrow-back-rounded" style={{ fontSize: "36px" }} className='down-arrow' /></Link>
            </div>
          </div>
        </section>

        <section className='Content' id='Projects'>
          <ProjectGallery></ProjectGallery>
        </section>

        <section className='Content' id='Bio'>
          <Bio></Bio>
        </section>
      </main>
      <footer>
        <div className='footer-content'>
          <p className='caption'>© 2023 Sandy Lee | Built with React, ThreeJS, 🧋, 🐈, 💜</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
