import React, { Component } from "react";

class CategoryMenu extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div>
          <div>
            <h2>Categories</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#s"
                  data-bs-toggle="collapse"
                  data-bs-target="#electronics-sub"
                  aria-expanded="false"
                  aria-controls="electronics-sub"
                >
                  Electronics
                </a>
                <div className="collapse" id="electronics-sub">
                  <ul className="list-unstyled pl-3">
                    <li>
                      <a href="#">Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">Cameras</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <a
                  href="#s"
                  data-bs-toggle="collapse"
                  data-bs-target="#clothing-sub"
                  aria-expanded="false"
                  aria-controls="clothing-sub"
                >
                  Clothing
                </a>
                <div className="collapse" id="clothing-sub">
                  <ul className="list-unstyled pl-3">
                    <li>
                      <a href="#">Men's</a>
                    </li>
                    <li>
                      <a href="#">Women's</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryMenu;
