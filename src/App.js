import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Portfolio from './Components/Home/Portfolio';


function App() {
  return (
    <div className="">
      <Navbar ></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>


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
