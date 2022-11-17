import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import CyphersSingle from './components/CyphersSingle';
import CyphersTable from './components/CyphersTable';
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
          <Route path = "/Register" element={<register/>}/>
          <Route path = "/Progress" element={<progress/>}/>

        </Routes>

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
