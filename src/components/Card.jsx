import React,{Component} from "react";
import { Glyphicon } from "react-bootstrap";
import Data from "./Data";

require("./card-style")

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tooltipVisible: false
        }
    }
    toogleTooltip(tooltipVisible) {
        this.setState({tooltipVisible});
    }
    
    render() {
        const {item} = this.props;
        return (
            <div className="card">
                <div className="picture">
                    <a href={item.id} className={this.state.tooltipVisible ? "over" : "out"} title={item.title} onMouseEnter={this.toogleTooltip.bind(this, true)} onMouseLeave={this.toogleTooltip.bind(this, false)}>
                        <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2"+item.poster_path} alt={item.title} />
                        <div className="tooltip-box">
                           tooltip
                        </div>
                    </a>
                </div>
                <article>
                    <header>
                        <div className="percent">{item.vote_average}%</div>
                        <div className="data-title">
                            <a href="#" title={item.vote_average}>{item.title}</a>
                            <span><Data data={item.release_date} /></span>
                        </div>
                    </header>
                    <div className="overview">
                        <p>{item.overview}</p>
                    </div>
                    <div className="view-more">
                        <a href={item.id} title={item.title}>Mais informações</a>
                    </div>
                </article>
            </div>
        )
    }
}

export default Card;