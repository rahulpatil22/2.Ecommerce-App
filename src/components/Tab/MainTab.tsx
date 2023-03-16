import React, { useState } from "react";
// import "./styles.css";
import AllTabs from "./AllTabs";
// // Tabs Components
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';



type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Tab One",
    index: 1,
    Component: TabOne
  },
  {
    label: "Tab Two",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Tab Three",
    index: 3,
    Component: TabThree
  }
];

export default function MainTab() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App">
      <h1> </h1>
      <h2></h2>
      <br />
      <AllTabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
}
