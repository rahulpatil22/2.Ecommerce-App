import React, { useState } from "react";
import Filter from "../Filter/Filter";
import styled from "styled-components";
import ProductList from "../ProductList/ProductList";

const LeftDrawer = styled.nav<{ open: boolean }>`
  background-color: #00ccb4;
  color: #fff;
  width: ${({ open }) => (open ? "250px" : "0px")};
  transition: width 0.3s ease-in-out;
`;

const RightPanel = styled.div`
  flex: 1;
  overflow: auto;
  padding: 16px;
  background-color: #ededed;
`;




const TabWiseProduct = () => {
  const [open] = useState(true);
  return (
    <>
      <LeftDrawer open={open}>
        <Filter />
      </LeftDrawer>
      <RightPanel>
        <ProductList />
      </RightPanel>
    </>
  );
};
export default TabWiseProduct;
