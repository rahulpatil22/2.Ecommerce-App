import { IProduct } from "../modals/IProduct";
import actionType from "./actionType";
export const loadProducts = (products: IProduct[]) => {
  return {
    type: actionType.LOAD_PRODUCTS,
    payload: products,
  };
};

export const loadCategories = (categories: string[]) => {
  return {
    type: actionType.LOAD_CATEGORIES,
    payload: categories,
  };
};

export const loadBrands = (brands: string[]) => {
  return {
    type: actionType.LOAD_BRANDS,
    payload: brands,
  };
};

export const loadProductsCategoriesBrands = (
  products: IProduct[],
  categories: string[],
  brands: string[]
) => {
  return {
    type: actionType.LOAD_PRODUCTS_CATEGORIES_BRANDS,
    payload: { products, categories, brands },
  };
};

export default {
  loadProducts,
  loadCategories,
  loadBrands,
  loadProductsCategoriesBrands,
};
