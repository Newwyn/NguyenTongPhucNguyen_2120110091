import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "../../validation/validation";
import axios from "axios";
import AppUrl from "../api/AppUrl";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  };

  emailOnChange = (e) => {
    this.setState({ email: e.target.value });
  };

  messageOnChange = (e) => {
    this.setState({ message: e.target.value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;

    if (name.length === 0) toast.error("please write name");
    else if (email.length === 0) toast.error("please write email");
    else if (message.length === 0) toast.error("please write message");
    else if (!validation.nameRegx.test(name)) toast.error("Name invalid");
    else {
      // Make a POST request to your API
      axios
        .post(AppUrl.PostContact, {
          name: name,
          email: email,
          message: message,
        })
        .then((response) => {
          toast.success("Success");
        })
        .catch((error) => {
          if (error.response) {
            toast.error("Error: " + error.response.data.message);
          } else {
            toast.error("Error: " + error.message);
          }
        });
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Contact Us</h2>
            <form
              onSubmit={this.onSubmitForm}
              action="/submit"
              method="POST"
              id="contactFrom"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  onChange={this.nameOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  required
                  onChange={this.emailOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={4}
                  required
                  defaultValue={""}
                  onChange={this.messageOnChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" id="sendBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Contact;
