import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import Card from "./Card";
require("./listCards-style")

class ListMovies extends Component {

    filterMovies(list) {
        
        return list.results.filter((i) => {
            if (this.props.selectedGenre.length === 0)
                return true
            let found = i.genre_ids.some(r=> this.props.selectedGenre.includes(r.toString()))
            return found
        })
    }

    render() {
        const { list, selectedGenre } = this.props;
        return (
            <div className="listCards">
                <div className="containerList">
                    {
                       this.filterMovies(list).length > 0 ?
                        this.filterMovies(list).map((item, key) => {
                            return (
                                <Card item={item} key={key} />
                            )

                        })
                        :
                        <div className="no-results">Nenhum resultado encontrado.</div>
                    }
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