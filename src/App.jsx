import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// Components
import Home from "./pages/Home";
import Detail from "./pages/Detail";

//CSS
require("./scss/reset");

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </div>
    </Router>
)

export default App;