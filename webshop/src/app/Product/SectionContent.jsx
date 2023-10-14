import React from "react";
import { Link } from "react-router-dom";

const SectionContent = () => {
  return (
    <section className="padding-bottom">
      <header className="section-heading mb-4">
        <h3 className="title-section">Recommended items</h3>
      </header>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-4 col-6">
          <div className="card card-product-grid">
            <Link to="/details" className="img-wrap">
              <img
                src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien-002.jpg"
                alt=""
              />
            </Link>
            <figcaption className="info-wrap">
              <ul className="rating-stars mb-1">
                <li style={{ width: "80%" }} className="stars-active">
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
              <div>
                <Link to="/details" className="text-muted">
                  category san pgam
                </Link>
                <Link to="/details" className="title">
                  ten san pham
                </Link>
              </div>
              <div className="price h5 mt-2">2660000$</div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionContent;
