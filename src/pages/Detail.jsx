import React, {Component} from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("PROPS INSIDE DETAIL", this.props.params.id)

    return (
      <div>
        <h3>Detail</h3>
      </div>
    );
  }
}

export default Detail;