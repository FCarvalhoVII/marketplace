import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FcElectronics } from 'react-icons/fc'
import { FaSignOutAlt } from 'react-icons/fa'

import api from '../../services/api'

import './styles.css'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        if (password !== confirmPassword) {
            return alert('As senhas não batem! Tente novamente.')
        }

        try {
            const response = await api.post('register', { name, email, password })

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', response.data.user.email)
            
            history.push('/address')
        } catch(err) {
            alert('Falha no registro, tente novamente.')
        }
    }

    return (
        <div className="screen">
            <div className="register-container">

                <h1><FcElectronics />Marketplace</h1>
                <hr/>

                <section className="form">
                    <form onSubmit={handleRegister}>

                        <h2>Faça seu registro</h2>

                        <p>Nome:</p>
                        <input 
                            placeholder="Seu nome" type="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <p>Email:</p>
                        <input 
                            placeholder="Seu email" type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <p>Senha:</p>
                        <input 
                            placeholder="Sua senha" type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <p>Confirmar senha:</p>
                        <input 
                            placeholder="Confirme sua senha" type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />

                        <button className="button" type="submit">Registrar</button>

                    </form>
                </section>

                <Link className="back-link" to="/">
                    <FaSignOutAlt size={16} color="#4090ff" />
                    Já sou cadastrado
                </Link>
            </div>
        </div>
    )
}

export default Register