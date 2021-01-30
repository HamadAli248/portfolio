import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ReactMarkdown from "react-markdown";
import post1 from "./Blogs/DockerisingReactApp.md";
import "github-markdown-css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    fetch(post1)
      .then((res) => res.text())
      .then((post) => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }

  render() {
    const { post } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <div className="markdown-body">
            <ReactMarkdown source={post} escapeHtml={false} />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Blog;
