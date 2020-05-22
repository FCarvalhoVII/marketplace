import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'

import ConfirmDeleteProduct from '../../../components/User/DeleteProduct'

import './styles.css'

function UserContent({ name, city, products }) {
    const [activeDelete, setActiveDelete] = useState(false)
    const [productId, setProductId] = useState('')

    function handleActiveDelete(id) {
        setActiveDelete(!activeDelete)
        setProductId(id)
    }

    return (
        <div className="profile-container">
            <h2>{ name }</h2>

            <h3>{ city }</h3>

            <ul>
                <h3>Produtos a venda:</h3>

                {products.map(product => (                
                    <li  key={product.id}>
                        <div className="mini-img">
                            <img src={null} alt=""/>
                        </div>

                        <span>{product.name}</span>

                        <span>
                            {
                                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                    .format(product.price)
                            }
                        </span>

                        <span> Estoque: {product.stock}</span>

                        <div>
                            <Link to={`/profile/${product.id}`}>
                                <button className="button-cancel"><MdEdit /></button>
                            </Link>

                            <button 
                                className="button-delete" 
                                onClick={() => handleActiveDelete(product.id)}
                            >
                                <MdDelete />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <ConfirmDeleteProduct 
                activeDelete={activeDelete}
                handleCancel={handleActiveDelete}
                productId={productId}
            />
        </div>
    )
}

export default UserContent