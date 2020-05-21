import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import api from '../../services/api'

import './styles.css'

function Product() {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [salesman, setSalesman] = useState('')
    
    const { productId } = useParams()

    useEffect(() => {
        api.get(`product/${productId}`)
            .then(response => {
                setProductName(response.data.name)
                setPrice(response.data.price)
                setStock(response.data.stock)
                setDescription(response.data.description)
                setCategory(response.data.category.name)
                setSalesman(response.data.user.name)
            })
            .catch(() => {
                alert('Falha ao tentar obter resposta com o servidor, tente mais tarde.')
            })
    }, [productId])

    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                
                <div className="content-container">
                    <h2>Produto</h2>

                    <hr/>

                    <div className="product-box">
                        <div className="box-row">
                            
                            <div className="box-img">
                                <img src={null} alt=""/>
                            </div>

                            <div className="info-box">
                                <h3>{ productName }</h3>

                                <p>{ category }</p>

                                <h2>
                                    {
                                        Intl.NumberFormat('pt-BR', { 
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(price)
                                    }
                                </h2>

                                <span>Quantidade em estoque: { stock }</span>

                                <span>Vendedor: { salesman }</span>
                            </div>
                        </div>
                        <div className="description">
                            <h4>Descrição</h4>

                            <p>{ description }</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Product