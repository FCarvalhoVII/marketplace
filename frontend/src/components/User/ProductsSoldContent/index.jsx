import React from 'react'

import './styles.css'

function UserContent({ name, city, products }) {
    return (
        <div className="profile-container">
            <h2>{ name }</h2>

            <h3>{ city }</h3>

            <ul>
                <h3>Produtos Comprados:</h3>

                {products.map(product => (                
                    <li  key={product.id}>
                        <div className="mini-img">
                            <img src={null} alt=""/>
                        </div>

                        <span>{product.products.name}</span>

                        <span>Quantidade comprada: {product.quantity_sold}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserContent