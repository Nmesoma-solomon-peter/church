import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


const App:React.FC = ()=> {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
     
    </div>
  )
}

export default App
