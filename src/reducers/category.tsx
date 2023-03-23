import actionType from "../Actions/actionType";
import { ICategoryState } from "./../modals/ICategoryState";

const initialState = {
  Categories: [
    { id: 1, name: "Home" },
    { id: 2, name: "TV" },
  ],
  Tab: "Home",
};

type Action = {
  type: string;
  payload: any;
};

export default (state: ICategoryState = initialState, action: Action) => {
  switch (action.type) {
    case actionType.CATEGORY_CHANGE:
      return { ...state, Tab: action.payload };
    case actionType.CATEGORY_ADD:
      return { ...state, Categories: action.payload };
    default:
      return state;
  }
};
