import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Navbar from './components/navbar';

console.log({ Home, About, Services, Gallery, Contact, Navbar });
function App() {
  return (
    <div className="App">

      {/* navbar */}
      <Navbar />

      <div className='App_main-page-contain'>
        {/* main page content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
