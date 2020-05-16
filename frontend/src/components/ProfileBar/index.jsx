import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function ProfileBar({ name }) {
    return (
        <div className="navbar">
            <div className="user-container">
                <div className="user-img">
                    <img src={null} alt=""/>
                </div>
                <h4>{ name }</h4>
            </div>

            <section>
                <hr/>
                <Link className="link" to="/">
                    <p>Seu Endereço</p>
                </Link>
                <hr/>
                <Link className="link" to="/profile/addProduct">
                    <p>Adicionar produto a venda</p>
                </Link>
                <hr/>
                <Link className="link" to="/">
                    <p>Produtos vendidos</p>
                </Link>
                <hr/>
            </section>
        </div>
    )
}

export default ProfileBar