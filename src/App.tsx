import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import Work from './pages/Work';
import About from './pages/About';
import Fun from './pages/Fun';
import Footer from './components/Footer';
import Nav from './components/Nav';

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
        <Footer />
      </footer>
    </div>
  );
}

export default App;
