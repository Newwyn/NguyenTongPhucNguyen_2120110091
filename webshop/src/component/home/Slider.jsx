import axios from "axios";
import React, { Component } from "react";
import AppUrl from "../api/AppUrl";
class Slider extends Component {
  constructor() {
    super();
    this.state = {
      sliders: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppUrl.AllSliders)
      .then((response) => {
        this.setState({
          sliders: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let sliders = this.state.sliders;
    let myview = sliders.map((slider, j) => {
      return (
        <div className={j === 0 ? "active carousel-item" : "carousel-item"}>
          <img src={slider.slider_img} className="d-block w-100" alt="..." />
        </div>
      );
    });
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">{myview}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Slider;
