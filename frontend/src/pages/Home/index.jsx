import React from 'react'

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Product from '../../components/Product'

import './styles.css'

function Home() {
    return (
        <div className="home-container">
            <Header />

            <div className="body-container">
                <SideBar />
                
                <div className="content-container">
                    <h2>Produtos</h2>

                    <hr/>

                    <div className="products-container">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home