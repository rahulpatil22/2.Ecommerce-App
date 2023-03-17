import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Records from "../data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainTab from "./components/Tab/MainTab";
import Main from "./components/Tabs/Main";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { ThemeProvider } from 'styled-components';

function App() {
 
  return (
    <>
  
    <GlobalStyle/>
      <MainTab />
    
      
      
      {/* <Main /> */}
    </>
    //     <Router>
    // <Routes>
    //   <Route path='/' element={Tab}/>
    // </Routes>
    //     </Router>
  );
}

export default App;
