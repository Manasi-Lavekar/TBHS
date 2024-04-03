import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Card from "../src/Components/Card";
import Signup from './Pages/signup';
import Home from './Pages/Home'
function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;