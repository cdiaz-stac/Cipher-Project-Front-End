import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="container page-container">
      <div className='content-wrap'>
        <Header/>

        <Routes>
          <Route path="/" element={ <Home/> } exact />
          {/* <Route path="/view" element={ <ViewCategories/> } /> */}
          {/* <Route path="/add" element={ <CreateCypher/> } /> */}
          <Route path ="/cyphers" element={<CyphersTable/>} exact />
          <Route path = "/cyphers/:id" element={<CyphersSingle/>}/>
        </Routes>

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
