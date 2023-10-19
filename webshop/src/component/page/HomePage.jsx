import React, { Component } from "react";
import Header from "../common/Header";
import Slider from "../home/Slider";
import NewArrival from "../home/NewArrival";
import Featured from "../home/Featured";
import Footer from "../common/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <NewArrival />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
