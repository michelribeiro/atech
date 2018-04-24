import React, {Component} from "react";

class Data extends Component {

  writeNewdate() {
    return (
      this.props.data
    )
  }

  render() {

    return (
      <div>
        {this.writeNewdate()}
      </div>
    )
  }
}
export default Data;