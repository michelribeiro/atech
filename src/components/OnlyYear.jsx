import React, {Component} from "react";

class OnlyYear extends Component {

    year() {
      if(this.props.data) {
        return this.props.data.split('-')[0]
      }
    }

  render() {

    return (
      <span>{this.year()}</span>
    )
  }
}
export default OnlyYear;