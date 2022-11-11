import { LayoutComponents } from '../../components/layoutComponents'
import './styles.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[name, setName] = useState("")
    const[lastName, setLastName] = useState("")

    const navigate = useNavigate();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:80/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'name': name,
                'lastname': lastName,
                'email': email,
                'password': password
            }
        })
        .then(function (response) {
            if(response.status !== 200){
                console.log('error: ', response.data.error);
                return;
            }

            const userData = response.data;
            navigate('/principal', { state: { userData }});
        })
        .catch((err) => console.log(err))
    }

    return(
        <LayoutComponents>
            <form className='login-form'>
                <span className='login-form-title'>Criar Conta</span>
                
                <div className='wrap-input'>
                    <input 
                        className={name !== "" ? 'has-val input' : 'input'}
                        type='string'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Nome'></span>
                </div>

                <div className='wrap-input'>
                    <input 
                        className={lastName !== "" ? 'has-val input' : 'input'}
                        type='string'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Sobrenome'></span>
                </div>

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
                    <button className='login-form-btn' onClick={handleCreateAccount}>Registrar</button>
                </div>

                <div className='text-center'>
                    <span className='regiterTxt'>Já possui conta? </span>
                    <Link className='linkToLogin' to='/login'>Fazer Login.</Link>
                </div>

                <div className='text-center' >
                    <Link className='homePageButton' to='/'>Voltar</Link>
                </div>

            </form>
        </LayoutComponents>
    )
}