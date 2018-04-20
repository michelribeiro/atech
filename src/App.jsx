import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

// Components
import Home from "./pages/Home";
import Detail from "./pages/Detail";

//CSS
require("./scss/reset");

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/detail"
                        component={Detail}
                    />
                </Switch>
            </Router>
        )
    }
}

export default App;