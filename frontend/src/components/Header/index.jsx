import React from 'react'
import { Link } from 'react-router-dom'
import { FcElectronics } from 'react-icons/fc'
import { MdShoppingCart } from 'react-icons/md'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo">
                <Link className="button-home" to="/">
                    <h1><FcElectronics />Marketplace</h1>
                </Link>

                <div className="buttons-container">
                    <Link to="/register">
                        <button className="button-register">Registrar</button>
                    </Link>
                    <Link to="/login">
                        <button className="button-login">Entrar</button>
                    </Link>
                </div>
            </div>

            <hr/>

            <div className="cart-container">
                <div className="cart">
                    <MdShoppingCart size={30} />
                    Itens no carrinho: 0
                </div>
            </div>
        </header>
    )
}

export default Header