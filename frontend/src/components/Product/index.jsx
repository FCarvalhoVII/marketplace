import React from 'react'

import './styles.css'

function Product() {
    return (
        <div className="product">
            <div className="product-img">
                <img src={null} alt=""/>
            </div>

            <div className="product-info">
                <h3>Notebook</h3>
                <p>R$ 3.000,00</p>
                
                <div className="salesman-info">
                    <p>Cidade</p>
                    <p>Nome</p>
                </div>
            </div>
        </div>
    )
}

export default Product