import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTab from "../Modal/AddTab";
import styled from "styled-components";
import { ITab } from "../../modals/ITab";
import tabAction from "../../Actions/tabAction";
import { MdDeleteForever, MdEditNote } from "react-icons/md";
import EditTab from "../Modal/EditTab";

const Header = styled.header`
  background-color: #00ccb4;
  display: flex;
  width: 100%;
`;

const LeftSide = styled.div`
  color: white;
  border: none;
  // padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px 0px 5px 5px;
  position: absolute;
  right: 5px;
`;


const Button = styled.button`
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  // cursor: pointer;
  margin: 0px 0px 0px 5px;
  // position: absolute;
  // right: 5px;
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
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  // margin: 10px;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const HeaderComponent = () => {
  const [showAddTab, setShowAddTab] = useState(false);
  const [showEditTab, setShowEditTab] = useState(false);
  const tabs = useSelector((state: RootState) => state.tabs).Tabs;
  const selectedTab = useSelector((state: RootState) => state.tabs).Tab;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState<ITab>();
  const [position, setPosition] = useState(-1);
  const [editName, setEditName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const addCategory = () => {
    setShowAddTab(true);
  };

  const onClose = () => {
    setShowAddTab(false);
    setShowEditTab(false);
  };
  const handleTabClick = (index: number, tab: ITab) => {
    dispatch(tabAction.changeTab(tab));
    setActiveTabIndex(index);
  };
  const onDelete = (cat: ITab) => {
    let tab: ITab[] = tabs;
    if (tab.length === 1) {
      return;
    }

    let newList: ITab[] = tab.filter((item) => {
      return item.name !== cat.name;
    });
    console.log(newList);
    dispatch(tabAction.deleteTabs(newList, tab[0]));
  };

  const onEdit = (tab: ITab, index: number) => {
    setEdit(tab);
    setEditName(tab.name);
    setPosition(index);
    setShowEditTab(true);
  };

  const addTab = () => {
    if (name === "") {
      alert("Please enter Tab name.");
      return;
    }
    let tempTabs: ITab[] = tabs;
    //in this tabs we store the data from store and this tabs store in tempTabs
    if (tempTabs.length === 5) {
      alert("You can only add 5 tabs.");
      return;
    }

    let flag = tempTabs.some((item) => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    if (flag) {
      alert("Tab already exist.");
    } else {
      let id = tempTabs[tempTabs.length - 1].id;
      let newCat: ITab = {
        id: id + 1,
        name,
        serach: "",
        category: "",
        brand: "",
        minPrice: 0,
        maxPrice: 1000,
        minDiscount: 0,
        maxDiscount: 100,
      };
      tempTabs.push(newCat);
      // newcat is push in temptab
      dispatch(tabAction.addTab(tempTabs));
      setName("")
      // and dispatch the action with addTab method with store data (new data and store data)
      //those actions we provide type and payload from tabAction.tsx
      // props.onClose();
    }
  };

  return (
    <div>
      <Header>
        {tabs.map((tab: ITab, index: number) => (
          <TabHeader key={index} isActive={selectedTab.id === tab.id}>
            <label onClick={() => handleTabClick(index, tab)}>
              {tab.name}
            </label>

            {/* <br></br>  */}
            <MdDeleteForever onClick={(evt) => onDelete(tab)} />
            <MdEditNote onClick={(evt) => onEdit(tab, index)} />
          </TabHeader>
        ))}
        <LeftSide>
        <Input
          placeholder="Please enter tab name"
          value={name}
          type="text"
          onChange={handleChange}
        />
        <Button type="button" onClick={addTab}>
          Add Tab
        </Button>

        </LeftSide>
        
      </Header>
      {showAddTab && <AddTab onClose={onClose} />}
      {showEditTab && (
        <EditTab
          edit={edit}
          position={position}
          editName={editName}
          onClose={onClose}
        />
      )}
    </div>
  );
};
export default HeaderComponent;
