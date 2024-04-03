import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Card from "../src/Components/Card";
import Home from "../src/Pages/Home"
function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/card" element={<Card/>}/>
    </Routes>
  );
}

export default App;
