import './App.css'
import { Route, Routes } from 'react-router-dom';
// route import here
import Home from './components/Home';
import Media from './components/Media';
import Contact from './components/Contact';
import OurMission from './components/OurMission';
import OurBelieve from './components/OurBelieve';
import Gallery from './components/Gallery';
import Allministry from './components/Allministry';
import "bootstrap-icons/font/bootstrap-icons.css";


const App:React.FC = ()=> {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mission" element={<OurMission />} />
      <Route path="/believe" element={<OurBelieve />} />
      <Route path="/ministries" element={<Allministry />} />
      <Route path="/gallery" element={<Gallery />} />
      </Routes>
     
    </div>
  )
}

export default App
