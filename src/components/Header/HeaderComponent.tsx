import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTab from "../Modal/AddTab";
import styled from "styled-components";
import { ITab } from "../../modals/ITab";
import tabAction from "../../Actions/tabAction";

const Header = styled.header`
  background-color: #00ccb4;
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  position: absolute;
  right: 5px;
`;

interface TabHeaderProps {
  isActive: boolean;
}

const TabHeader = styled.div<TabHeaderProps>`
  padding: 12px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? "2px solid black" : "2px solid transparent"};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const HeaderComponent = () => {
  const [showAddTab, setShowAddTab] = useState(false);
  const tabs = useSelector((state: RootState) => state.tabs).Tabs;
  const selectedTab = useSelector((state: RootState) => state.tabs).Tab;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const dispatch = useDispatch();

  const addCategory = () => {
    setShowAddTab(true);
  };

  const onClose = () => {
    setShowAddTab(!showAddTab);
  };
  const handleTabClick = (index: number, tab: ITab) => {
    dispatch(tabAction.changeTab(tab));
    setActiveTabIndex(index);
  };

  return (
    <div>
      <Header>
        {tabs.map((tab: ITab, index: number) => (
          <TabHeader
            key={index}
            isActive={selectedTab.id === tab.id}
            onClick={() => handleTabClick(index, tab)}
          >
            {tab.name}
          </TabHeader>
        ))}
        <Button type="button" onClick={addCategory}>
          Add Tab
        </Button>
      </Header>
      {showAddTab && <AddTab onClose={onClose} />}
    </div>
  );
};
export default HeaderComponent;
