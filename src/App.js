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

        <Routes>
          <Route path="/" element={ <Home/> } exact />
          {/* <Route path="/view" element={ <ViewCategories/> } /> */}
          {/* <Route path="/add" element={ <CreateCypher/> } /> */}
          <Route path ="/cyphers" element={<CyphersTable id={id} setId={setId}/>} exact />
          <Route path = "/cyphers/:id" element={<CyphersSingle id={id} setId={setId}/>}/>
        </Routes>

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
