import React, {Component} from "react";
import { Link } from "react-router-dom";
import {paths} from "../config/path"

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    let path = `${paths.PATH_BASE}${paths.PATH_DISCOVER}${paths.KEY}`;
    console.log(path)

    return (
      <div>
        <h3>Home</h3>
        <hr />
        <Link to="/detail">Detalhe</Link>
        {/* {
          path.results.map((item, key) =>
            <div key={key}>
              <p>{item.title}</p>
            </div>
          )
        } */}
      </div>
    );
  }
}

export default Home;