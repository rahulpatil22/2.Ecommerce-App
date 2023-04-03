// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Records from "../data.json";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import MainTab from "./components/Tab/MainTab";
// // import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

// // import Navbar from "./components/NavBar/NavBar";
// // import SidebarComponent from "./components/SideBarPages/SidebarComponent";


// function App() {
 
//   return (
//     <>
  
//     <GlobalStyle/>
//       {/* <MainTab /> */}
//       {/* <Navbar/> */}
//       <SidebarComponent/>
//       {/* <Sidebar/> */}
    
      
      
//       {/* <Main /> */}
//     </>
    
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import MainContainer from "./components/Home/MainContainer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;