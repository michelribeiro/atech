import React,{Component} from "react";
import { Glyphicon } from "react-bootstrap";
import Card from "./Card";
require("./listCards-style")

class ListMovies extends Component {

    render() {
        
        return (
            <div className="listCards">
                <div className="containerList">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="pagination">
                    <p className="left">Atualmente na página: 1 de 1
                        <span className="total_results">(20 resultados)</span>
                    </p>
                    <p className="right">
                        <a href="#">
                            <Glyphicon glyph="circle-arrow-right" />
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}
export default ListMovies;