import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

function Edit({ userId }) {
    const [name, setName] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')

    const history = useHistory()

    async function handleEdit(e) {
        e.preventDefault()

        const data = {
            name,
            zipcode,
            city,
            street,
            number
        }

        try {
            await api.put('profile/edit', data, {
                headers: {
                    Authorization: `Bearer ${userId}`
                }
            })

            history.push('/profile')
        } catch(err) {
            alert('Falha ao registrar endereço, tente novamente.')
        }
    }

    return (
        <React.Fragment>
            <h2>Editar</h2>

            <section className="form">
                <form onSubmit={handleEdit}>

                    <p>Nome:</p>
                    <input 
                        placeholder="Informe o seu Nome" type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

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

                    <div className="buttons-box">
                        <button className="button" type="submit">Registrar</button>
                    </div>

                </form>
            </section>
        </React.Fragment>
    )
}

export default Edit