import React from 'react'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'

import './styles.css'

function SideBar() {
    return (
        <div className="navbar">
            <section>
                <h2><MdExplore size={30} /> Categorias</h2>

                <Link className="link" to="/">
                    <p>Notebooks</p>
                </Link>
                <Link className="link" to="/">
                    <p>Notebooks</p>
                </Link>
                <Link className="link" to="/">
                    <p>Notebooks</p>
                </Link>
            </section>
        </div>
    )
}

export default SideBar