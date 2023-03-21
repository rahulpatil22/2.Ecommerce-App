import React, { useState } from "react";
import "./Styles.css"
import AllTabs from "./AllTabs";
// // Tabs Components
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styled from "styled-components";
import { Icon, Link, NavItem, StyledNavbar } from './StyledComponent'



type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];


// Tabs Array
const tabs: TabsType = [
  {
    label: "Home",
    index: 1,
    Component: TabOne
  },
  {
    label: "Mobile",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Watches",
    index: 3,
    Component: TabThree
  }
];

export default function MainTab() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="Styled">
      <h1> </h1>
      <h2></h2>
      <br />
      <AllTabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
}
