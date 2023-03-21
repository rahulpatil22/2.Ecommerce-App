import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Records from "../data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainTab from "./components/Tab/MainTab";
import Main from "./components/Tabs/Main";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

import Navbar from "./components/NavBar/NavBar";
import SidebarComponent from "./components/SideBarPages/SidebarComponent";


function App() {
 
  return (
    <>
  
    <GlobalStyle/>
      {/* <MainTab /> */}
      {/* <Navbar/> */}
      <SidebarComponent/>
      {/* <Sidebar/> */}
    
      
      
      {/* <Main /> */}
    </>
    
  );
}

export default App;
