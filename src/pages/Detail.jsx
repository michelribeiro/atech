import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import DetailMovie from "../components/DetailMovie"
import { paths } from "../config/path";

class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
        apiResults: {
            results: []
        }
    };

    this.setApi   = this.setApi.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
}

setApi(result) {
    this.setState({apiResults: result})
}

fetchApi() {
    let id = parseInt(this.props.params.id)

    fetch(paths.PATH_BASE + paths.MOVIE + id + paths.KEY)
    .then(response => response.json())
    .then(result => this.setApi(result))
    .catch(e => e);
}

componentDidMount() {
    this.fetchApi()
}

  render() {

    return (
      <div>
        <Header />
        <DetailMovie list={this.state.apiResults} />
        <Footer />
      </div>
    );
  }
}

export default Detail;