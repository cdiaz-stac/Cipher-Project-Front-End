import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import CyphersSingle  from './Components/CyphersSingle';
import CyphersTable from './Components/CyphersTable';

function App() {
  return (
    <div className="container page-container">
      <div className='content-wrap'>
        <Header/>

        <div style={{height: "20px"}}></div>

        <Routes>
          <Route path="/" element={ <Home/> } exact />
          <Route path ="/cyphers" element={<CyphersTable/>} exact />
          <Route path = "/cyphers/:id" element={<CyphersSingle/>}/>
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
