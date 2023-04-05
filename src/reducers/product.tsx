import actionType from "../Actions/actionType";
import { IProductState } from "../modals/IProductState";

const initialState = {
  Products: [],
  Categories: [],
  Brands: [],
};

type Action = {
  type: string;
  payload: any;
};

export default (state: IProductState = initialState, action: Action) => {
  switch (action.type) {
    case actionType.LOAD_PRODUCTS_CATEGORIES_BRANDS:
      return {
        ...state,
        Products: action.payload.products,
        Categories: action.payload.categories,
        Brands: action.payload.brands,
      };
    case actionType.LOAD_PRODUCTS:
      return { ...state, Products: action.payload };
    case actionType.LOAD_CATEGORIES:
      return { ...state, Categories: action.payload };
    case actionType.LOAD_BRANDS:
      return { ...state, Brands: action.payload };
    default:
      return state;
  }
};
