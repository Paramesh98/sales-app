import ProductList from "@/components/productList";
import StickyHeader from "@/components/sticky-header";
import React from "react";

function Products() {
  return (
    <div>
      <StickyHeader
        title="Check Our Products"
        description="Awesome & Creative HTML CSS layout by TemplateMo"
      />
      <ProductList />
    </div>
  );
}

export default Products;
