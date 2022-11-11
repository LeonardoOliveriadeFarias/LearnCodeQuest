import "./styles.css";
import React from 'react';
import imgTela from "../../img/banner-API.png"
import { Link } from 'react-router-dom';


export const Home = () => {

    return (
        <div>
            <div className="homePage">
                <h2 className="appName">LearnCodeQuest</h2>
                <text className="textoPage"> Aprenda de uma forma divertida <br/> e ganhe recompensas.<br/></text>
                <Link to="/seletor"><button className="botao">Começe agora!</button></Link>
            </div>
            <div className="imagem">
                <img src={imgTela} alt = "imagemDaPage" />
            </div>
        </div>
    )
}