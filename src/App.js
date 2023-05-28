import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listagem from './components/Listagem/Listagem';
import SalaEspera from './components/SalaEspera';
import Estudo from './components/Estudo/Estudo';
import Conquistas from './components/Conquistas';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/listagem' element={<Listagem/>}></Route>
          <Route path='/espera' element={<SalaEspera/>}></Route>
          <Route path='/estudo' element={<Estudo/>}></Route>
          <Route path='/conquitas' element={<Conquistas/>}></Route>
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
