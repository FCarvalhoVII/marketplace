import React from 'react'
import { Link } from 'react-router-dom'

function LoginButtons() {
    return (
        <React.Fragment>
            <Link to="/register">
                <button className="button-register">Registrar</button>
            </Link>
            <Link to="/login">
                <button className="button-login">Entrar</button>
            </Link>
        </React.Fragment>
    )
}

export default LoginButtons