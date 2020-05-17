import React, { useState, useEffect } from 'react'

import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import AddNewProduct from '../../../components/User/AddNewProduct'
import Footer from '../../../components/Footer'

import api from '../../../services/api'

import './styles.css'

function AddProduct() {
    const [user, setUser] = useState('')

    const userId = localStorage.getItem('token')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: `Bearer ${userId}`
            }
        }).then(response => {
            setUser(response.data.name)
        })
    }, [userId])

    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                <ProfileBar name={user} />
                
                <div className="content-container">
                    <AddNewProduct />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AddProduct