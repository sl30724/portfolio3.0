import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import Layout from './pages/Layout';
import Work from './pages/Work';
import About from './pages/About';
import Fun from './pages/Fun';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Sbs from './pages/Sbs';
import Voteally from './pages/Voteally';
import Craigslist from './pages/Craigslist';
import Whoami from './pages/Whoami';
import Innaorganic from "./pages/Innaorganic";
import PAT from './pages/PAT';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Nav />
      <main>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/fun' element={<Fun />} />
            <Route path='/work/PAT' element={<PAT />} />
            <Route path='/work/sbs' element={<Sbs />} />
            <Route path='/work/voteally' element={<Voteally />} />
            <Route path='/work/craigslist' element={<Craigslist />} />
            <Route path='/work/whoami' element={<Whoami />} />
            <Route path='/work/innaorganic' element={<Innaorganic/>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
