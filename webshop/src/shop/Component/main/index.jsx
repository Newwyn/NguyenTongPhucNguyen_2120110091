import React from 'react';
import Banner from './Component/banner'
import Slider from './Component/slider'
import Category from './Component/category'
import Product from './Component/product'
import Blog from './Component/blog'

const index = () => {
    return (
        <div className="section-main section-main--index">
  <div className="container">
    <div className="row" style={{flexWrap:'nowrap'}}>
      <div className="col-lg-cus">
        <div className="main-menu mainMenujs setHeight">	</div>
      </div>
<Slider />
<Banner />
</div></div>
<main class="wrapperMain_content" style={{minHeight:"auto"}}>	
<Category />
<Product />
<Blog />
</main>
</div>
 
    );
};

export default index;