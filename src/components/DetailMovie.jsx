import React, {Component} from "react";
import OnlyYear from "./OnlyYear";

require('./detailMovie-style')

class DetailMovie extends Component {

    render() {
        const {list} = this.props;
        const bg = {
            backgroundImage: 'url(https://image.tmdb.org/t/p/w500/' + list.backdrop_path + ')'
        };

        return (
            <div className="detailMovie">
                <div className="custom_bg" style={bg}>
                    <div className="degrade">
                        
                        <div className="containerMain">
                            <section>
                                <div className="poster">
                                    <div className="image_content">
                                        <img src={"https://image.tmdb.org/t/p/w500/"+list.poster_path} alt={list.original_title} title={list.original_title} />
                                    </div>
                                </div>
                                <div className="header_poster_wrapper">
                                
                                    <h2>
                                        {list.title}
                                        {list.release_date}
                                    </h2>
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