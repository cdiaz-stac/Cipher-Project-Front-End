import './App.css';
import { Routes, Route} from 'react-router-dom';
import CyphersTable from './components/CyphersTable'
import CyphersSingle
 from './components/CyphersSingle';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ="/cyphers" element={<CyphersTable/>} exact />
      <Route path = "/cyphers/:id" element={<CyphersSingle/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
