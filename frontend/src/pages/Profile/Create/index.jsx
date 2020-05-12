import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FcElectronics } from 'react-icons/fc'

import api from '../../../services/api'

import './styles.css'

function CreateAddress() {
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')

    const history = useHistory()

    const userId = localStorage.getItem('token')

    async function handleCreateAddress(e) {
        e.preventDefault()

        const data = {
            zipcode,
            city,
            street,
            number
        }

        try {
            await api.post('profile/info', data, {
                headers: {
                    Authorization: `Bearer ${userId}`
                }
            })

            history.push('/')
        } catch(err) {
            alert('Falha ao registrar endereço, tente novamente.')
        }
    }

    return (
        <div className="screen">
            <div className="address-container">

                <h1><FcElectronics />Marketplace</h1>
                <hr/>

                <section className="form">
                    <form onSubmit={handleCreateAddress}>

                        <h2>Informe o seu endereço</h2>

                        <p>CEP:</p>
                        <input 
                            placeholder="Informe o CEP" type="text"
                            value={zipcode}
                            onChange={e => setZipcode(e.target.value)}
                        />

                        <p>Cidade onde mora:</p>
                        <input 
                            placeholder="Informe a Cidade" type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <p>UF:</p>
                        <input 
                            placeholder="Informe a UF" type="text"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                        
                        <p>Logradouro:</p>
                        <input 
                            placeholder="Informe a Rua" type="text"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                        />

                        <p>Número:</p>
                        <input 
                            placeholder="Informe o Número"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        
                        <button className="button" type="submit">Registrar</button>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default CreateAddress