import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Card from "../src/Components/Card";

function App() {
  return (
    <Routes>
      <Route path="/card" element={<Card/>}/>
    </Routes>
  );
}

export default App;
