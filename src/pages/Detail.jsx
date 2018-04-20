import React, {Component} from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Detail</h3>
        <hr />
        <Link to="/">{"<- Home"}</Link>
      </div>
    );
  }
}

export default Detail;