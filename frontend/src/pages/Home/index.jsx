import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Product from '../../components/Product'
import Footer from '../../components/Footer'

import api from '../../services/api'

import './styles.css'

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data)
        })
    }, [])

    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                <SideBar />
                
                <div className="content-container">
                    <h2>Produtos</h2>

                    <hr/>

                    <div className="products-container">
                        {products.map(product => (
                            <Product 
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                salesman={product.user.name}
                                productId={product.id}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home