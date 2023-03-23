import React, { FC, useState } from "react";
import "./Styles.css";
import { Icon, Link, NavItem, StyledNavbar } from "./StyledComponent";
import { useSelector, useDispatch } from "react-redux";
import category from "../../reducers/category";
import categoryAction from "../../Actions/categoryAction";
import { ICategory } from "../../modals/ICategory";
import { useNavigate } from "react-router-dom";
import AddTab from "../Modal/Modal";

type TabsProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const AllTabs: FC<TabsProps> = ({
  className = "tabs-component",
  orientation = "horizontal",
}) => {
  const [showAddTab, setShowAddTab] = useState(false);
  const category = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();
  // const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  let navigate = useNavigate();

  const addCategory = () => {
    // let categories: ICategory[] = category.Categories;
    // let catName = "Mobile";
    // let id = categories[categories.length - 1].id;
    // let newCat: ICategory = {
    //   id: id + 1,
    //   name: catName,
    // };
    // categories.push(newCat);
    // console.log(categories);

    // dispatch(categoryAction.addCategory(categories));
    // navigate("/addTab");
    setShowAddTab(true);
  };

  const onClose = () => {
    setShowAddTab(!showAddTab);
  };

  return (
    <StyledNavbar
      className={
        orientation === "vertical" ? className + " vertical" : className
      }
    >
      <NavItem role="tablist" aria-orientation={orientation}>
        {category.Categories.map((tab: ICategory) => (
          <button
            className={category.Tab === tab.name ? "active" : ""}
            onClick={() => dispatch(categoryAction.changeCategory(tab.name))}
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={category.Tab === tab.name}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={category.Tab === tab.name ? 0 : -1}
            id={`btn-${tab.id}`}
          >
            {tab.name.toUpperCase()}
          </button>
        ))}

        <button onClick={addCategory} type="button">
          Add Tab
        </button>
      </NavItem>
      {/* <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div> */}
      {showAddTab && <AddTab onClose={onClose} />}
    </StyledNavbar>
  );
};
export default AllTabs;
