import React, { useState } from "react";
import { ICategory } from "../../modals/ICategory";
import "./../Modal/Modal.style.css";
import { useSelector, useDispatch } from "react-redux";
import categoryAction from "../../Actions/categoryAction";
import TableContainer from '@mui/material/TableContainer';
import styled from "styled-components";
import { Table, TableRow } from "@mui/material";

const Thead = styled(TableRow)`
background:#ec407a;
& > th{
  color:#fff;
  font-size:20px;
}
`
const TBody = styled(TableRow)`
background:#ec407a;
& > td{
  
  font-size:15px;
  width:100%;
  text-align="left";
}
`

const StyledTable = styled(Table)`
width:100%;
overflow-x: auto;
sx={{ minWidth: 650 }} aria-label="simple table"
`


type Props = {
  onClose: () => void;
};

export default function AddTab(props: Props) {
  const category = useSelector((state: RootState) => state.categories);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState<ICategory>();
  const [position, setPosition] = useState(-1);
  const [editName, setEditName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEditChange = (e: any) => {
    setEditName(e.target.value);
  };

  const addCategory = () => {
    if (name == "") {
      alert("Please enter category name.");
      return;
    }
    let categories: ICategory[] = category.Categories;
    let flag = categories.some((item) => {
      return item.name.toLowerCase() == name.toLowerCase();
    });
    if (flag) {
      alert("Category already exist.");
    } else {
      let id = categories[categories.length - 1].id;
      let newCat: ICategory = {
        id: id + 1,
        name,
      };
      categories.push(newCat);
      dispatch(categoryAction.addCategory(categories));
      props.onClose();
    }
  };

  const editCategory = () => {
    if (editName == "") {
      alert("Please enter category name.");
      return;
    }
    let categories: ICategory[] = category.Categories;
    // let flag = categories.some((item, index) => {
    //   return item.name.toLowerCase() == editName.toLowerCase();
    // });
    // if (flag) {
    //   alert("Category already exist.");
    // } else {
    categories[position].name = editName;
    dispatch(categoryAction.addCategory(categories));
    onClear();
    // }
  };

  const onClear = () => {
    setEdit(undefined);
    setPosition(-1);
    setEditName("");
  };

  const onDelete = (cat: ICategory) => {
    if (cat.name.toLowerCase() == "home") {
      return;
    }
    let categories: ICategory[] = category.Categories;
    let newList: ICategory[] = categories.filter((item) => {
      return item.name != cat.name;
    });
    dispatch(categoryAction.addCategory(newList));
    props.onClose();
  };

  const onEdit = (category: ICategory, index: number) => {
    setEdit(category);
    setEditName(category.name);
    setPosition(index);
  };

  return (
    <div className="Styled modal">
      {edit != undefined ? (
        <>
          <input value={editName} type="text" onChange={handleEditChange} />
          <button className="modal-button" onClick={editCategory} type="button">
            Update
          </button>
          <button className="modal-button" onClick={onClear} type="button">
            Close
          </button>
        </>
      ) : (
        <>
        
          <input
            placeholder="Enter Category Name"
            value={name}
            type="text"
            onChange={handleChange}
          />
          
          <div>
            {" "}
            <button
              className="modal-button"
              onClick={addCategory}
              type="button"
            >
              Add Tab
            </button>
          </div>

          <div>
            <button
              className="modal-button"
              onClick={props.onClose}
              type="button"
            >
              Close
            </button>
          </div>

          {category.Categories.map((item: ICategory, index: number) => {
            return (
              <div key={"" + index}>
                <h3>{item.name}</h3>

                {item.name.toLowerCase() != "home" && (
                  <>
                    <button
                      className="modal-button"
                      onClick={(evt) => onEdit(item, index)}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="modal-button"
                      onClick={(evt) => onDelete(item)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
