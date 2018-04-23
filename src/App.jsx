import "babel-polyfill";
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { paths } from "./config/path";

//CSS
require("./scss/reset");
require("./scss/main");

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: []
        };

        this.fetchApi = this.fetchApi.bind(this);
        this.setApi   = this.setApi.bind(this);
    }

    setApi(result) {
        this.setState({results: result})
    }

    fetchApi() {

        fetch(paths.PATH_BASE + paths.PATH_DISCOVER + paths.KEY)
        .then(response => response.json())
        .then(result => this.setApi(result))
        .catch(e => e);
    }

    componentDidMount() {
        this.fetchApi(this.state.results)
    }

    render() {
        const {results} = this.state;
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => (
                        <Home list={results} />  
                    )} />
                    <Route exact path="/detail" render={(props) => (
                        <Detail />
                    )} />

                </div>
            </Router>
        )
    }
}


export default App;