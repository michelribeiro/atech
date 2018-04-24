import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import MainHome from "../components/MainHome"
import Footer from "../components/Footer"
class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { className, list } = this.props;
    console.log('>>>',list)
    return (
      <div className={className}>
        <Header />
        <MainHome list={list} className="home" />
        <Footer />
      </div>
    );
  }
}

export default Home;