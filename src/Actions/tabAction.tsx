import { ITab } from "../modals/ITab";
import actionType from "./actionType";
export const changeTab = (category: ITab) => {
  return {
    type: actionType.TAB_CHANGE,
    //action as an event describe, how to do and manipulate the state
    //check the actiontype from actionType.tsx
    //action check the type of request-"CATEGORY_CHANGE"
    payload: category,
    //payload contains the data that is going to be transfer to the reducer.
    //reducer use this data to manupulate the state
  };
};

export const addTab = (categorys: ITab[]) => {
  //pass the payload name of category with addTab
  return {
    type: actionType.TAB_ADD,
    payload: categorys,
  };
};

export const deleteTabs = (tabs: ITab[], tab: ITab) => {
  return {
    type: actionType.TAB_DELETE,
    payload: { tabs, tab },
  };
};

export default {
  changeTab,
  addTab,
  deleteTabs,
};
