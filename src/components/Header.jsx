import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import Search from "./Search";

require("./header")


class Header extends Component {
    state = {
        isTop: true
    }
    componentDidMount(){
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 2;
            if(isTop !== this.state.isTop) {
                this.setState({isTop})
            }
        })
    }

    render() {
        
        return(
            <div className="cont-header">
                <header className={this.state.isTop ? 'regular' : 'smaller'}>

                    <div className="content">
                        <div className="sub_media">
                            <ul className="small right">
                                <li><a href="#">Apps</a></li>
                                <li><a href="#">Fóruns</a></li>
                                <li><a href="#">Placar de colaboradores</a></li>
                                <li><a href="#">Contribua</a></li>
                                <li><a href="#">API</a></li>
                                <li><a href="#">Suporte</a></li>
                            </ul>
                            <div className="left">
                                <ul className="primary">
                                    <li className="logo">
                                        <a href="/">
                                            <img src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" title="The MovieDB" alt="The MovieDB" width="91" height="81" />
                                            <span className="title">The Movie DB</span>
                                            {/* <Glyphicon glyph="asterisk" /> */}
                                        </a>
                                    </li>
                                    <li><a href="#">Explorar</a></li>
                                    <li><a href="#">Filmes</a></li>
                                    <li><a href="#">Séries</a></li>
                                    <li><a href="#">Pessoas</a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul className="primary">
                                    <li><a href="#"><Glyphicon glyph="plus" /></a></li>
                                    <li><a href="#"><Glyphicon glyph="globe" /></a></li>
                                    <li><a href="#"><Glyphicon glyph="bell" /></a></li>
                                    <li className="user">
                                        <a href="#">
                                            <div className="avatar">
                                                <img src="http://via.placeholder.com/32x32?text=U" alt="User"/>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Search />
                </header>
            </div>
        )
    }

}

export default Header;