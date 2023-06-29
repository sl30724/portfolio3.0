import { Routes, Route } from "react-router-dom";
import { Icon } from '@iconify-icon/react';
import './App.css';
import Layout from './pages/Layout';
import Work from './pages/ProjectGallery';
import About from './pages/About';
import Fun from './pages/Fun';
import Nav from './Nav';

function App() {

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/fun' element={<Fun />} />
        </Routes>
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
