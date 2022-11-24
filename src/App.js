import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import ProgramDetail from './components/homepage/ProgramDetail';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/programdetail" element={<ProgramDetail/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
