import React, { useState, useEffect } from 'react'

import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import ShowInfo from '../../../components/User/Info'
import Edit from '../../../components/User/Edit'
import Footer from '../../../components/Footer'

import api from '../../../services/api'

import './styles.css'

function Info() {
    const [user, setUser] = useState('')
    const [addresses, setAddresses] = useState([])
    const [edit, setEdit] = useState(false)

    const userId = localStorage.getItem('token')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: `Bearer ${userId}`
            }
        }).then(response => {
            setUser(response.data.name)
            setAddresses(response.data.addresses)
        })
    }, [userId])

    function handleEditProfile(boolean) {
        setEdit(boolean)
    }

    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                <ProfileBar name={user} />
                
                <div className="content-container">
                    <div className="info-container">

                        {
                            edit 
                                ? <Edit userId={userId} />
                                : <ShowInfo user={user} addresses={addresses} />
                        }
                        
                        <div className="buttons-box">
                            {
                                edit
                                    ? <button className="button" 
                                        onClick={() => handleEditProfile(false)}>Cancelar</button>
                                    : <button className="button" 
                                        onClick={() => handleEditProfile(true)}>Editar</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Info