import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Detail</h3>
        <a href="/#/">{"<- Home"}</a>
      </div>
    );
  }
}

export default Detail;