import React,{Component} from "react";
import { Glyphicon } from "react-bootstrap";

require("./card")

class Card extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div className="card">
                <picture>
                    <a href="#" title="titulo do filme">
                        <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/6oNm06TPz2vGiPc2I52oXW3JwPS.jpg" alt="titulo do filme" />
                        <div className="tooltip-box">
                           tooltip
                        </div>
                    </a>
                </picture>
                <article>
                    <header>
                        <div className="percent">78%</div>
                        <div className="data-title">
                            <a href="#" title="Viva - A Vida é uma Festa">Viva - A Vida é uma Festa</a>
                            <span>27 de Outubro de 2017</span>
                        </div>
                    </header>
                    <div className="overview">
                        <p>Miguel é um menino de 12 anos que quer em ser um músico famoso, mas deve lidar sua família desaprova seu sonho. Determinado a virar o jogo, o jovem acaba desencadeando…</p>
                    </div>
                    <div className="view-more">
                        <a href="#" title="Viva - A Vida é uma Festa">Mais informações</a>
                    </div>
                </article>
            </div>
        )
    }
}

export default Card;