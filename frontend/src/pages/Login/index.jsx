import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FcElectronics } from 'react-icons/fc'
import { FaSignInAlt } from 'react-icons/fa'

import api from '../../services/api'

import './styles.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('login', { email, password })
            
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', response.data.user.email)

            history.push('/')
        } catch(err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="screen">
            <div className="login-container">

                <h1><FcElectronics />Marketplace</h1>
                <hr/>

                <section className="form">
                    <form onSubmit={handleLogin}>

                        <h2>Faça seu Login</h2>

                        <input 
                            placeholder="Seu email" type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            placeholder="Sua senha" type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">Entrar</button>

                    </form>
                </section>

                <Link className="back-link" to="/register">
                    <FaSignInAlt size={16} color="#4090ff" />
                    Não tenho cadastro
                </Link>
            </div>
        </div>
    )
}

export default Login