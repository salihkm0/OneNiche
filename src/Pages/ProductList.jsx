import React from "react";
import { ProductContainer,} from "../UI/ProductListStyle";
import FilterBox from "../ProductListsComponents/FilterBox";
import ProductsListBox from "../ProductListsComponents/ProductsListBox";

export default function ProductList () {
  return (
    <>
      <ProductContainer>
         <FilterBox />
         <ProductsListBox/>
      </ProductContainer>
    </>
  );
}
