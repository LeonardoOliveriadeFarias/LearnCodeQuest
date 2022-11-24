import './styles.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/layoutComponents';
import axios from 'axios';
import spinnerImg from '../../img/spinner.gif'

export const Login = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:80/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                'email': email, 
                'password': password
            }
        })
        .then(function (response) {
            setLoading(false);
            if(response.status !== 200){
                console.log('Status code diferente de 200');
                return;
            }
            const userData = response.data;
            navigate('/logado', { state: { userData }});
            
        })
        .catch((err) => console.log(err));
    };
    

    return (
       
            <LayoutComponents>
                {loading ? <div><img src={spinnerImg} alt="Loading" style={{ width: 100, display: 'flex', alignItems: 'center', marginLeft: '30%', marginTop: '-20%'}}></img> </div>:
                <form className='login-form'>
                    <span className='login-form-title'>Welcome!</span>
                    <div className='wrap-input'>
                        <input 
                            className={email !== "" ? 'has-val input' : 'input'}
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span className='focus-input' data-placeholder='Email'></span>
                    </div>
                    <div className='wrap-input'>
                        <input 
                            className={password !== "" ? 'has-val input' : 'input'}
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span className='focus-input' data-placeholder='password'></span>
                    </div>
    
                    <div className='container-login-form-btn'>
                        <button className='login-form-btn' onClick={handleLogin}>Login</button>
                    </div>
    
                    <div className='text-center'>
                        <span className='regiterTxt'>Não possui conta? </span>
                        <Link className='linkToRegister' to='/register'>Criar Conta.</Link>
                    </div>
    
                    <div className='text-center' >
                        <Link className='homePageButton' to='/'>Voltar</Link>
                    </div>
    
                </form>
            }
            </LayoutComponents>
                 
        )
}

export default Login