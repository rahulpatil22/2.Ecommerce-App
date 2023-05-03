import React, { useState, useEffect } from "react";
import { ITab } from "../../modals/ITab";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import tabAction from "../../Actions/tabAction";
// import "./Styles.css";

type Props = {
  edit: ITab | undefined;
  position: number ;
  editName: string;
  onClose: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 20px;
  width: 600px;
  border: 1px solid gray;
`;

const TableRow = styled.tr`
  border: 1px solid gray;
  background-color: lightgray;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid gray;
`;

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
`;

export default function EditTab(props: Props) {
  const tabs = useSelector((state: RootState) => state.tabs).Tabs;
  //using useSelector  we called store(tabs), we fetched data inside our state Tabs)inside reducer
  //rootstate from store with state
  const [name, setName] = useState("");
  const [edit, setEdit] = useState<ITab>();
  const [position, setPosition] = useState(-1);
  const [editName, setEditName] = useState("");
  const dispatch = useDispatch();
  //call the actions using usedispatch hook with the method

  useEffect(()=>{
    setEdit(props.edit);
    setPosition(props.position)
    setEditName(props.editName)
  },[])

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEditChange = (e: any) => {
    setEditName(e.target.value);
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
      // and dispatch the action with addTab method with store data (new data and store data)
      //those actions we provide type and payload from tabAction.tsx
      props.onClose();
    }
  };

  const editTab = () => {
    if (editName === "") {
      alert("Please enter Tab name.");
      return;
    }
    let tab: ITab[] = tabs;

    tab[position].name = editName;
    dispatch(tabAction.addTab(tab));
    props.onClose();
  };

  // const onClear = () => {
  //   setEdit(undefined);
  //   setPosition(-1);
  //   setEditName("");
  // };

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
    props.onClose();
  };

  const onEdit = (tab: ITab, index: number) => {
    setEdit(tab);
    setEditName(tab.name);
    setPosition(index);
  };

  return (
    <div className="modal">
      <Container>
      <>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>
                    <Input
                      value={editName}
                      placeholder="Please enter tab name"
                      type="text"
                      onChange={handleEditChange}
                    />
                  </TableHeader>
                  <TableHeader>
                    <Button onClick={editTab} type="button">
                      Update
                    </Button>
                  </TableHeader>
                  <TableHeader>
                    <Button onClick={props.onClose} type="button">
                      Close
                    </Button>
                  </TableHeader>
                </TableRow>
              </thead>
            </Table>
          </>
      </Container>
    </div>
  );
}
