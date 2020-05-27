import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Product from '../../components/Product'
import Footer from '../../components/Footer'

import api from '../../services/api'

import './styles.css'

function Home() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        api.get('products', { params: { page } })
            .then(response => {
                setProducts(response.data)
            })
            .catch(() => {
                alert('Falha ao obter dados do servidor.')
            })
    }, [page])

    function handleNextPage() {
        setPage(page + 1)
    }

    function handlePreviousPage() {
        setPage(page - 1)
    }

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
                    <div className="buttons-page">
                        <button 
                            onClick={handlePreviousPage} 
                            disabled={page === 1} 
                        >
                            Anterior
                        </button>

                        <button onClick={handleNextPage} >Próxima</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home