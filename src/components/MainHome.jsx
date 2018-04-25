import React, {Component} from "react";
import FormFilter from "./FormFilter";
import ListMovies from "./ListMovies";

require("./mainHome-style")

class MainHome extends Component {

    render() {
        const {className, list, genres, filterGenre, selectedGenre} = this.props;
        return (
            <main className={className}>
                <section className="main_content">
                    <div className="head_filter">
                        <div className="title">
                            <h2>Descobrir Novos Filmes e Séries</h2>
                        </div>
                        <div className="links_type">
                            <ul>
                                <li><a href="#" className="selected">Filmes</a></li>
                                <li><a href="#">Séries</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <FormFilter genres={genres} filterGenre={filterGenre} />
                <ListMovies list={list} selectedGenre={selectedGenre} />
            </main>
        )
    }
}

export default MainHome;