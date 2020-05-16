import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Product from '../../components/Product'
import Footer from '../../components/Footer'

import api from '../../services/api'

function ProductsByCategory() {
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        api.get(`products/${categoryId}`).then(response => {
            setCategory(response.data.name)
            setProducts(response.data.products)
        })
    }, [categoryId])

    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                <SideBar />
                
                <div className="content-container">
                    <h2>{ category }</h2>

                    <hr/>

                    <div className="products-container">
                        {products.map(product => (
                            <Product 
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                salesman={`ID: ${product.user_id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductsByCategory