import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <a href="/#/detail">Detalhe</a>
      </div>
    );
  }
}

export default Home;