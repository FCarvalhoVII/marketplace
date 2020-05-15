import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'

import api from '../../services/api'

import './styles.css'

function SideBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get('categories').then(response => {
            setCategories(response.data)
        })
    }, [])

    return (
        <div className="navbar">
            <section>
                <h2><MdExplore size={30} /> Categorias</h2>

                <hr/>
                {categories.map(category => (
                    <React.Fragment key={category.id}>
                        <Link key={category.id} className="link" to={`/category/${category.id}`}>
                            <p>{ category.name }</p>
                        </Link>
                        <hr />
                    </React.Fragment>
                ))}
            </section>
        </div>
    )
}

export default SideBar