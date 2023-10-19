import axios from "axios";
import React, { Component } from "react";
import AppUrl from "../api/AppUrl";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      slug: props.slug,
      content: "",
    };
  }
  loadSiteInfo() {
    axios
      .get(AppUrl.AllSiteInfo)
      .then((response) => {
        this.setState({
          siteInfo: response.data[0],
          content: response.data[0][this.props.slug],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  shouldComponentUpdate(props) {
    if (this.state.slug != props.slug) {
      this.setState({
        slug: props.slug,
        content: this.state.siteInfo[props.slug],
      });
    }
    return true;
  }
  componentDidMount() {
    this.loadSiteInfo();
  }
  render() {
    return (
      <div className="content">
        <div className="infopanel">
          <h2>{this.state.title}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: this.state.content }}
          />
        </div>
      </div>
    );
  }
}

export default Info;
