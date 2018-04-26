import React, {Component} from "react";
import { Glyphicon } from "react-bootstrap";
import Percent from "./Percent";
import OnlyYear from "./OnlyYear";
import { paths } from "../config/path";

require('./detailMovie-style')

class DetailMovie extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            apiResults: {
                crew: []
            }
        };
    
        this.setApi   = this.setApi.bind(this);
        this.fetchApi = this.fetchApi.bind(this);
    }
    
    setApi(result) {
        this.setState({apiResults: result})
    }
    
    fetchApi() {
        let id = parseInt(this.props.credits.id)
    
        fetch(paths.PATH_BASE + paths.MOVIE + id +"/credits"+ paths.KEY)
        .then(response => response.json())
        .then(result => this.setApi(result))
        .catch(e => e);
    }
    
    componentDidMount() {
        this.fetchApi()
    }

    render() {

        const {list} = this.props;
        const bg = list.backdrop_path ? {
            backgroundImage: 'url(https://image.tmdb.org/t/p/w500/' + list.backdrop_path + ')'  
        } : {};

        return (
            <div className="detailMovie">
                <div className="custom_bg" style={bg}>
                    <div className="degrade">
                        <div className="onlyMobile">
                            <img src={"https://image.tmdb.org/t/p/w500/"+list.backdrop_path} />
                        </div>

                        <div className="containerMain">
                            <section>
                                <div className="poster">
                                    <div className="image_content">
                                        {
                                            list.poster_path &&
                                                <img src={"https://image.tmdb.org/t/p/w500/"+list.poster_path} alt={list.original_title} title={list.original_title} />
                                        }
                                    </div>
                                </div>
                                <div className="header_poster_wrapper">
                                    <div className="bgMobile">
                                        <div className="title">
                                            <h2>
                                                {list.title}
                                                <span>
                                                    <OnlyYear data={list.release_date} />
                                                </span>
                                            </h2>
                                        </div>
                                        <ul className="actions">
                                            <li className="boxPercent">
                                            <div className="percent">
                                                <Percent item={list.vote_average} />
                                            </div>
                                            <p className="textAval">Avaliação dos usuários</p>
                                            </li>
                                            <li className="hidden-mobile">
                                                <a href="#" className="radius">
                                                    <Glyphicon glyph="list" />
                                                </a>
                                            </li>
                                            <li className="hidden-mobile">
                                                <a href="#" className="radius">
                                                    <Glyphicon glyph="heart" />
                                                </a>
                                            </li>
                                            <li className="hidden-mobile">
                                                <a href="#" className="radius">
                                                    <Glyphicon glyph="bookmark" />
                                                </a>
                                            </li>
                                            <li className="hidden-mobile">
                                                <a href="#" className="radius">
                                                    <Glyphicon glyph="star" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text">
                                                    <Glyphicon glyph="play" />
                                                    Reproduzir trailer
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header_info">
                                        <h3>Sinopse</h3>
                                        <div className="overview">
                                            <p>{list.overview}</p>
                                        </div>
                                        <h3>Equipe técnica principal</h3>
                                        <ul className="peoples">
                                            {
                                                this.state.apiResults.crew.map((item, key) => {
                                                    if(key <4) {
                                                        return(
                                                            <li key={key}>
                                                                <p className="name">{item.name}</p>
                                                                <p>{item.job}</p>
                                                            </li>
                                                            
                                                        )
                                                    }
                                                })
                                            }
                                            
                                        </ul>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default DetailMovie;