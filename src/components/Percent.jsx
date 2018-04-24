import React, { Component } from "react";

class Percent extends Component {
  
  componentDidMount(){
    var element = document.querySelector('.chart');
    new EasyPieChart(element, {
    });
  }

  percent() {
    return (
      <div className="chart" data-percent={Math.floor(this.props.item * 10)}>
        {Math.floor(this.props.item * 10)+"%"}
      </div>
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