import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../../services/api'

import './styles.css'

function AddNewProduct() {
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')

    const history = useHistory()

    const userId = localStorage.getItem('token')

    useEffect(() => {
        api.get('categories').then(response => {
            setCategories(response.data)
        })
    }, [])

    async function handleCreateProduct(e) {
        e.preventDefault()

        const data = {
            categoryId,
            name,
            price,
            stock,
            description
        }

        try {
            await api.post('profile/product', data, {
                headers: {
                    Authorization: `Bearer ${userId}`
                }
            })

            history.push('/profile')
        } catch(err) {
            alert('Falha ao adicionar produto! Tente novamente.')
        }
    }

    return (
        <div className="product-create-container">
            <h2>Novo Produto</h2>

            <section className="form">
                <form onSubmit={handleCreateProduct}>

                    <p>Nome:</p>
                    <input 
                        placeholder="Nome do produto" type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <p>Preço (apenas números):</p>
                    <input 
                        placeholder="Preço do produto" type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <p>Quantidade em estoque (apenas números):</p>
                    <input 
                        placeholder="Quantidade em estoque" type="number"
                        value={stock}
                        onChange={e => setStock(e.target.value)}
                    />

                    <p>Categoria:</p>
                    <select 
                        name="category"
                        value={categoryId}
                        onChange={e => setCategoryId(e.target.value)}
                    >

                        <option value={null}>Selecione...</option>

                        {categories.map(category => (
                            <option 
                                key={category.id} 
                                value={category.id}
                            >
                                { category.name }
                            </option>
                        ))}

                    </select>

                    <p>Descrição do produto:</p>
                    <textarea 
                        placeholder="Descrição do produto"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>

                </form>
            </section>
        </div>
    )
}

export default AddNewProduct