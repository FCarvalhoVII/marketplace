import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FcElectronics } from 'react-icons/fc'
import { MdShoppingCart } from 'react-icons/md'

import LoginButtons from './LoginButtons'

import './styles.css'

function Header() {
    const userId = localStorage.getItem('token')
    const email = localStorage.getItem('user')

    const history = useHistory()

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }
    
    return (
        <header>
            <div className="logo">
                <Link className="button-home" to="/">
                    <h1><FcElectronics />Marketplace</h1>
                </Link>

                <div className="buttons-container">

                    {userId  
                        ? <div className="toggle-profile">
                            <div className="user-mini-img">
                                <img src={null} alt=""/>
                            </div>
                            <Link to="/profile">
                                <h3>Seu Perfil</h3>
                                <p>{ email }</p>
                            </Link>
                            <button className="button-logout" onClick={handleLogout}>Sair</button>
                        </div>
                        : <LoginButtons />
                    }

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