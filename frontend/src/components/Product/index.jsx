import React from 'react'

import './styles.css'

function Product({ name, price, salesman }) {
    return (
        <div className="product">
            <div className="product-img">
                <img src={null} alt=""/>
            </div>

            <div className="product-info">
                <h3>{ name }</h3>

                <p>
                    {
                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                            .format(price)
                    }
                </p>
                
                <div className="salesman-info">
                    <p>Vendedor:</p>
                    <p>{ salesman }</p>
                </div>
            </div>
        </div>
    )
}

export default Product