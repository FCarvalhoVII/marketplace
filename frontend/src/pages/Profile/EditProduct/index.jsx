import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import EditProduct from '../../../components/User/EditProduct'
import Footer from '../../../components/Footer'

import api from '../../../services/api'

function EditProductPage() {
    const [user, setUser] = useState('')

    const { productId } = useParams()

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
                    <EditProduct productId={productId} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default EditProductPage