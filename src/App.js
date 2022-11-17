import './App.css';
import { Routes, Route} from 'react-router-dom';
import CyphersTable from './components/CyphersTable'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ="/" element={<CyphersTable/>} exact />
      </Routes>
      
    </div>
  );
}

export default App;
