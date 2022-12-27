
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import SobreMi from './pages/SobreMi';

function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/blooma' element={ <Home/> }/>
          <Route path='/productos' element={ <Productos/> }/>
          <Route path='/servicios' element={ <Servicios/> }/>
          <Route path='/category/:category' element={<Productos/>}/>
          <Route path='/productos/:id' element={<Detail/>}/>
          <Route path='/servicios/:id' element={<Detail/>}/>
          <Route path='/sobremi' element={ <SobreMi/> }/>
          <Route path='/contacto' element={ <Contacto/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>    
                  
     
    </>
  );
}

export default App;
