import './navbarStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  

    return (        
        <nav id="navbar" className="header">        
                <Link className = "header-font" to= "/">LearnCodeQuest</Link>
                <Link className='bttnCriarConta'  to="/register">Criar conta</Link>
                <Link className='bttnRegistrar'  to="/login"><button className="header-entrar">Entrar</button></Link>
        </nav> 
    );
}

export default  Navbar;
