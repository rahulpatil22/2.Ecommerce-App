import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import AddTab from "../Modal/AddTab";
import { IProduct } from "../../modals/IProduct";
// import Filter from "../Tab/Filter";
// import styled from "styled-components";
import Products from "../ProductList/Products";
// import { ITab } from "../../modals/ITab";



const ProductList = () => {
  const tab = useSelector((state: RootState) => state.tabs).Tab;
  const products = useSelector((state: RootState) => state.products).Products;
  const [productList, setProductList] = useState<IProduct[]>(products);
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>(tab.serach);
  const [categoryFilter, setCategoryFilter] = useState<string>(tab.category);
  const [brandFilter, setBrandFilter] = useState<string>(tab.brand);
  const [minPrice, setMinPrice] = useState<number>(tab.minPrice);
  const [maxPrice, setMaxPrice] = useState<number>(tab.maxPrice);
  const [minDiscount, setMinDiscount] = useState<number>(tab.minDiscount);
  const [maxDiscount, setMaxDiscount] = useState<number>(tab.maxDiscount);

  useEffect(() => {
    setValues();
  }, [products, tab]);

  const setValues = () => {
    setSearchTerm(tab.serach);
    setCategoryFilter(tab.category);
    setBrandFilter(tab.brand);
    setMinPrice(tab.minPrice);
    setMaxPrice(tab.maxPrice);
    setMinDiscount(tab.minDiscount);
    setMaxDiscount(tab.maxDiscount);
  };

  const filteredProducts = products.filter((product: IProduct) => {
    // filter by search term
    const searchTermMatch =
      searchTerm === "" ||
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brandName.toLowerCase().includes(searchTerm.toLowerCase());
    // filter by category
    const categoryFilterMatch =
      categoryFilter === "" || product.categoryName === categoryFilter;
    // filter by brand
    const brandFilterMatch =
      brandFilter === "" || product.brandName === brandFilter;
    // filter by price
    const priceFilterMatch =
      product.price >= minPrice && product.price <= maxPrice;
    // filter by discount
    const discountFilterMatch =
      product.discount >= minDiscount && product.discount <= maxDiscount;

    return (
      searchTermMatch &&
      categoryFilterMatch &&
      brandFilterMatch &&
      priceFilterMatch &&
      discountFilterMatch
    );
  });

  return (
    <>
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} />
      ) : (
        <h3>No Data Found</h3>
      )}
    </>
  );
};
export default ProductList;
