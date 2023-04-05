// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import AddTab from "../../Modal/AddTab";
// import jsonData from "../../database/data.json";

import styled from "styled-components";
// import { ITab } from "../../modals/ITab";

// import tabAction from "../../Actions/tabAction";
import HeaderComponent from "../Header/HeaderComponent";
import TabWiseProduct from "./TabWiseProduct";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// const Header = styled.header`
//   background-color: #222;
//   color: #fff;
//   display: flex;
//   width: 100%;
// `;

const Main = styled.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

// const Button = styled.button`
//   background-color: #0077cc;
//   color: white;
//   border: none;
//   padding: 10px 10px;
//   font-size: 16px;
//   cursor: pointer;
//   margin: 5px;
//   position: absolute;
//   right: 5px;
// `;


// const LeftDrawer = styled.nav<{ open: boolean }>`
//   background-color: #333;
//   color: #fff;
//   width: ${({ open }) => (open ? "250px" : "0px")};
//   transition: width 0.3s ease-in-out;
// `;

// const RightPanel = styled.div`
//   flex: 1;
//   overflow: auto;
//   padding: 16px;
//   background-color: #ededed;
// `;

// const MenuIcon = styled.span`
//   cursor: pointer;
// `;



// interface TabHeaderProps {
//   isActive: boolean;
// }

// const TabHeader = styled.div<TabHeaderProps>`
//   padding: 12px;
//   cursor: pointer;
//   border-bottom: ${(props) =>
//     props.isActive ? "2px solid black" : "2px solid transparent"};
//   font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
// `;





const MainContainer = () => {
  // const products = useSelector((state: RootState) => state.products).Products;
  // const categoryList = useSelector(
  //   (state: RootState) => state.products
  // ).Categories;
  // const brandList = useSelector((state: RootState) => state.products).Brands;
  // const [showAddTab, setShowAddTab] = useState(false);
  // const tabs = useSelector((state: RootState) => state.tabs).Tabs;
  // const selectedTab = useSelector((state: RootState) => state.tabs).Tab;
  // const [open, setOpen] = useState(true);
  // const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("Home products", products.length);
  //   console.log("Home categoryList", categoryList.length);
  //   console.log("Home brandList", brandList.length);
  //   async function loadData() {
  //     console.log("loadData", "loadData");
  //     const data: CategoryTree = JSON.parse(JSON.stringify(jsonData));
  //     const categories: string[] = [];
  //     const brands: string[] = [];
  //     let products: IProduct[] = [];
  //     for (const [categoryName, category] of Object.entries(data.categories)) {
  //       categories.push(categoryName);
  //       for (const [brandName, brand] of Object.entries(category.brands)) {
  //         brands.push(brandName);
  //         for (const [productName, product] of Object.entries(brand)) {
  //           let tmp: Product = product as Product;
  //           let tmpProduct: IProduct = {
  //             productName: productName,
  //             categoryName: categoryName,
  //             brandName: brandName,
  //             image: tmp.image,
  //             price: tmp.price,
  //             discount: tmp.discount,
  //             rating: tmp.rating,
  //           };
  //           products.push(tmpProduct);
  //         }
  //       }
  //     }
  //     dispatch(productsAction.loadProductsCategoriesBrands(products,categories,brands))
  //   }
  //   if (
  //     products.length == 0 &&
  //     categoryList.length == 0 &&
  //     brandList.length == 0
  //   )
  //     loadData();
  // }, []);

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
