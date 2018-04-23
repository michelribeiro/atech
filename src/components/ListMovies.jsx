import React,{Component} from "react";
import Card from "./Card";
require("./listMovies")

class ListMovies extends Component {

    render() {
        
        return (
            <div className="listCards">
                <Card />
                <Card />
            </div>
        )
    }
}
export default ListMovies;