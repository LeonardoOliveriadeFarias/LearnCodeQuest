import './Login-module.css';
import React, { useState } from 'react';



function Login(){
    
    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")
    
    
    return (
        <div className= "container" >
            <div className='container-login'>
                <div className='wrap-login'>
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
                            <button className='login-form-btn'>Login</button>
                        </div>

                        <div className='text-center'>
                            <span className='regiterTxt'>Não possui conta? </span>
                            <a className='linkToRegister' href='#'>Criar Conta.</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login