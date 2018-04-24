import React, { Component } from "react";

class Percent extends Component {
  
  percent() {
    return (
      Math.floor(this.props.item * 10)+"%"
    )
  }

  render() {
    return (
      <div>
        {this.percent()}
      </div>
    )
  }

}

export default Percent;