import './stylesSeletor.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/javaBootcamp.png'

export const Bootcamp = () => {

    return(
        <div className='container'>
            <Link to="/bootcamp" className='linkToBoot'>
                <div>
                    <div className='imgBoot'><img src={img} alt="img bootcamp"/></div>
                    Bootcamp Java 1
                </div>
            </Link>
            <Link to="/desafio" className='bootDesafio'>
                <div>
                <div className='imgBoot'><img src={img} alt="img bootcamp"/></div>
                Desafio Java 1
                </div>
            </Link>
        </div>
    )

}

export default Bootcamp;