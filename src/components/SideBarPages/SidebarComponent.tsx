import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "../SideBar/SideBar";
import Home from "../SideBarPages/Home";
import Furniture from "./Furniture";
import Shoes from "./Shoes";
import Tv from "./Tv";
import Watches from "./Watches";

const SidebarComponent: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/watches" element={<Watches />} />
        </Routes>
      </Router>
    </>
  );
};

export default SidebarComponent;
