import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import MainHome from "../components/MainHome"

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { className, list } = this.props;
    console.log('>>>',list.results)
    return (
      <div className={className}>
        <Header />

        <MainHome className="home" />
        

        {/* <ol>
          {
            list.results.map((item, key) =>
              <div key={key}>
                <li>{item.title}</li>
              </div>
            )
          }
          </ol> */}
      </div>
    );
  }
}

export default Home;