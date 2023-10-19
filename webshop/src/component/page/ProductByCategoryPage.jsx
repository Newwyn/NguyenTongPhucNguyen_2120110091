import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import CategoryMenu from "../Product/CategoryMenu";
import BrandMenu from "../Product/BrandMenu";
import ProductByCategory from "../Product/ProductByCategory";

class ProductByCategoryPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-2 ">
            <CategoryMenu />
            <BrandMenu />
          </div>
          <div className="col-10">
            <ProductByCategory />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductByCategoryPage;
