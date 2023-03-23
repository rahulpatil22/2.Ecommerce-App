import { ICategory } from "../modals/ICategory";
import actionType from "./actionType";
export const changeCategory = (category: string) => {
  return {
    type: actionType.CATEGORY_CHANGE,
    payload: category,
  };
};

export const addCategory = (categorys: ICategory[]) => {
  return {
    type: actionType.CATEGORY_ADD,
    payload: categorys,
  };
};

export default {
  changeCategory,
  addCategory,
};
