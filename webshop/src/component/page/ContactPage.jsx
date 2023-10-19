import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Contact from "../others/Contact";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
