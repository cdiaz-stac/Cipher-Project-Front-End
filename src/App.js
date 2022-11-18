import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import CyphersSingle from './Components/CyphersSingle';
import CyphersTable from './Components/CyphersTable';
import Register from './Components/Register';
import { useState } from 'react';


function App() {
  const[id, setId] = useState(0)
  return (
    <div className="container page-container">
      <div className='content-wrap'>
        <Header/>

        <div style={{height: "20px"}}></div>

        <Routes>
          <Route path="/" element={ <Home/> } exact />

         <Route path ="/cyphers" element={<CyphersTable id={id} setId={setId}/>} exact />
          <Route path = "/cyphers/:id" element={<CyphersSingle id={id} setId={setId}/>}/>
          <Route path = "/login" element={<login/>}/>
          <Route path = "/Register" element={<Register/>}/>
          <Route path = "/Progress" element={<progress/>}/>

        </Routes>

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
