import React from "react";
import {
  Container,
  // Logo,
  // Flag,
  // Text,
  // Wrapper,
  // Searchbox,
  // Select,
  // SearchIconWrapper
} from "../NavBar/styles";
// import { ShoppingCartOutlined, SearchOutlined, ArrowDropDown, RoomOutlined } from '@material-ui/icons';
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import MainTab from "../Tab/MainTab";
import Menubar from "../MenuBar/MenuBar";

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
      <MainTab/>
      </Container>
      <Menubar />
    </>
  );
};

export default Navbar;
