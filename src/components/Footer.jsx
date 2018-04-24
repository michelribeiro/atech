import React, {Component} from "react"

require('./footer-style')

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
          
            <div className="join">
                <img src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" />
                <a className="rounded logged_in" href="#">Olá, User name!</a>
            </div>
                <div>
                    <h3>O BÁSICO</h3>
                    <ul>
                        <li><a href="#">Sobre o  TMDb</a></li>
                        <li><a href="#">Contate-nos</a></li>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3>ENVOLVA-SE</h3>
                    <ul>
                        <li><a href="#">Bíblia do Colaborador</a></li>
                        <li><a href="#">Aplicativos de terceiros</a></li>
                        <li><a href="#">Adicionar um novo filme</a></li>
                        <li><a href="#">Adicionar uma nova série</a></li>
                    </ul>
                </div>
                <div>
                    <h3>COMUNIDADE</h3>
                    <ul>
                        <li><a href="#">Diretrizes</a></li>
                        <li><a href="#">Placar de colaboradores</a></li>
                        <li><a href="#">Fóruns</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
                <div>
                    <h3>LEGALIDADE</h3>
                    <ul>
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;