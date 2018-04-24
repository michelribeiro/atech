
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";

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

        fetch(paths.PATH_BASE + paths.PATH_DISCOVER + paths.KEY)
        .then(response => response.json())
        .then(result => this.setApi(result))
        .catch(e => e);
    }

    componentDidMount() {
        this.fetchApi()
    }

    render() {

        return (
            <Router>
                <HashRouter>
                    <div>
                        <Route exact path="/" render={(props) => (
                            <Home list={this.state.apiResults} />
                        )} />
                        <Route exact path="/detail/:id" render={(props) => (
                            <Detail params={props.match.params} list={this.state.apiResults} />
                        )} />
                    </div>
                </HashRouter>
            </Router>
        )
    }
}


export default App;