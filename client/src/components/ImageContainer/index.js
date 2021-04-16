import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import "./style.css";

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <Container>{props.children}</Container>;
  }
}

export default ImageContainer;
