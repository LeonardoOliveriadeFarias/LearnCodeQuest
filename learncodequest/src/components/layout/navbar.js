import './Navbar-module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

    const telaLogin = () =>{
        return <Link to = "/Login" />
    }

    const telaRegistro = () =>{
        //abre tela de registro
    }

    return (        
        <nav id="navbar" className="header">        
                <Link to = "/"> <p className = "header-font">LearnCodeQuest</p></Link>
                <div className='botoesNav'>
                    <Link to = "/Register"><button className="header-criar-conta" onClick={telaRegistro}>Criar conta</button></Link>
                    <Link to = "Login"><button className="header-entrar" onClick={telaLogin}>Entrar</button></Link>
                </div>
             
        </nav> 
    );
}

export default Navbar;