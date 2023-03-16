import React from 'react';
import logo from './logo.svg';
import './App.css';
import Records from "../data.json"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainTab from './components/Tab/MainTab';

function App() {
  return (
    <MainTab/>
//     <Router>
// <Routes>
//   <Route path='/' element={Tab}/>
// </Routes>
//     </Router>
  );
}

export default App;
