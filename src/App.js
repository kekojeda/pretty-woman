
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Faqs from './pages/Faqs';
import "./App.sass"


function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/blooma' element={ <Home/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/productos' element={ <Productos/> }/>
          <Route path='/servicios' element={ <Servicios/> }/>
          <Route path='/faqs' element={ <Faqs/> }/>
          <Route path='/contacto' element={ <Contacto/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </>
  );
}

export default App;
