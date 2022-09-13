import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Portfolio from './Components/Home/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skill from './Components/Home/Skill';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>

      {/* <Routes>

        <Route path='/' element={<Home>
        </Home>} />
        <Route path='/portfolio' element={<Portfolio></Portfolio>} />
        <Route path='/home' element={<Home>

        </Home>}>
          <Route path='/home/:about' element={<About></About>}></Route>
          <Route path='/home/:portfolio' element={<Portfolio></Portfolio>}></Route>
        </Route>


      </Routes> */}
    </div>
  );
}

export default App;
