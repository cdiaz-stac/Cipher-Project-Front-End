import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import CyphersSingle from './components/CyphersSingle';
import CyphersTable from './components/CyphersTable';
import { useState } from 'react';
import UserSignUp from './Components/UserSignUp';
import UserLogin from  './Components/UserLogin';
import UserApi from './apis/UserApi';
import History from './Components/History';
import ProgressTable from './components/ProgressTable';


function App() {
  const[id, setId] = useState(0)
  const[progId, setProgId] = useState(0)
  const[loggedIn, setLoggedIn] = useState()
  const[currUser,setCurrUser] = useState(UserApi.getUser())
  return (
    <div className="container page-container">
      <div className='content-wrap'>
        <Header currUser={currUser} setCurrUser={setCurrUser}/>

        <div style={{height: "20px"}}></div>

        <Routes>
          <Route path="/" element={ <Home/> } exact />
          <Route path ="/cyphers" element={<CyphersTable id={id} setId={setId}/>} exact />
          <Route path = "/cyphers/:id" element={<CyphersSingle id={id} setId={setId}/>}/>
          <Route path = "/login" element={<UserLogin/>}/>
          <Route path = "/Register" element={<UserSignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>  }/>
          <Route path = "/History" element={<History/>}/>
          <Route path = "/Progress" element={<progress/>}/>
          <Route path = "/Progress" element={<ProgressTable Id={id} setId={setId}/>}/>


        </Routes>

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
