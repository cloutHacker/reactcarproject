import './App.css';
import './font-awesome/css/fontawesome-all.css';
import Home from './components/Homepage/Home';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { Profiler } from 'react';
import Clock from './components/clock/Clock';
function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/register" element={<Register />}/>
  </Routes>
    </>
  
  );
}

export default App;
