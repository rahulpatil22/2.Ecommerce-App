import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import jsonData from "../../database/data.json";
import { IProduct } from "../../modals/IProduct";
import productsAction from "../../Actions/productsAction";
import styled from "styled-components";

import TabWiseProduct from "./TabWiseProduct";
import { Product } from "../../modals/Product";

import HeaderComponent from "../Header/HeaderComponent";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

interface Brand {
  [key: string]: Product;
}

interface Category {
  [key: string]: Brand;
}

interface CategoryTree {
  categories: {
    [key: string]: Category;
  };
}

const MainContainer = () => {
  const products = useSelector((state: RootState) => state.products).Products; //Products=reducer(LOAD_PRODUCTS_CATEGORIES_BRANDS),products=store
  const categoryList = useSelector((state: RootState) => state.products).Categories; //Categories=reducer(LOAD_PRODUCTS_CATEGORIES_BRANDS)
  const brandList = useSelector((state: RootState) => state.products).Brands; //Brands=reducer(LOAD_PRODUCTS_CATEGORIES_BRANDS),products=store
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Home products", products.length);
    console.log("Home categoryList", categoryList.length);
    console.log("Home brandList", brandList.length);

    async function loadData() {
      console.log("loadData", "loadData");
      const data: CategoryTree = JSON.parse(JSON.stringify(jsonData));
      const categories: string[] = [];
      const brands: string[] = [];
      let products: IProduct[] = [];
      for (const [categoryName, category] of Object.entries(data.categories)) {
        categories.push(categoryName);
        for (const [brandName, brand] of Object.entries(category.brands)) {
          brands.push(brandName);
          for (const [productName, product] of Object.entries(brand)) {
            let tmp: Product = product as Product;
            let tmpProduct: IProduct = {
              productName: productName,
              categoryName: categoryName,
              brandName: brandName,
              image: tmp.image,
              price: tmp.price,
              discount: tmp.discount,
              rating: tmp.rating,
            };
            products.push(tmpProduct);
          }
        }
      }
      dispatch(
        productsAction.loadProductsCategoriesBrands(
          products,
          categories,
          brands
        )
      );
    }
    if (
      products.length === 0 &&
      categoryList.length === 0 &&
      brandList.length === 0
    )
      loadData();
  }, [brandList.length, categoryList.length, dispatch, products.length]);

  return (
    <Container>
      <HeaderComponent></HeaderComponent>
      <Main>
        <TabWiseProduct />
      </Main>
    </Container>
  );
};
export default MainContainer;
