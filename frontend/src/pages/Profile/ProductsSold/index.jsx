import React, { useState, useEffect } from 'react'

import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import ProductsSoldContent from '../../../components/User/ProductsSoldContent'
import Footer from '../../../components/Footer'

import api from '../../../services/api'

import './styles.css'

function ProductsSold() {
    const [user, setUser] = useState('')
    const [city, setCity] = useState('')
    const [products, setProducts] = useState([])

    const userId = localStorage.getItem('token')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: `Bearer ${userId}`
            }
        }).then(response => {
            setUser(response.data.name)
            setCity(response.data.addresses[0].city)
        })

        api.get('purchased', {
            headers: {
                Authorization: `Bearer ${userId}`
            }
        }).then(response => {
            setProducts(response.data)
        })

    }, [userId])

    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                <ProfileBar name={user} />
                
                <div className="content-container">
                    <ProductsSoldContent name={user} city={city} products={products} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductsSold