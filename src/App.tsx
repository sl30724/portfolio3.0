import { Link } from "react-scroll";
import { Icon } from '@iconify-icon/react';
import './App.css';
import ProjectGallery from './ProjectGallery';
import Bio from './Bio';
import Nav from './Nav';

function App() {

  return (
    <div className="App" id='outer-container'>
      <Nav />

      <main id='page-wrap'>
        <section className="Content" id="Intro">
          <div className="Intro-header">
            <div className="name">
              <h1>Hi, I'm Sandy</h1>
              <p>
              As a designer and a moonlighting developer, I’m passionate about crafting experiences that are fun, human-centered, and meaningful.
              </p>
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
