import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import ProductsByCategory from './pages/ByCategory'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CreateAddress from './pages/Profile/Create'
import ProfileInfo from './pages/Profile/Info'
import EditProduct from './pages/Profile/EditProduct'
import ProductsSold from './pages/Profile/ProductsSold'
import Product from './pages/Product'
import AddProduct from './pages/Profile/AddProduct'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/category/:categoryId" children={<ProductsByCategory />} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/addProduct" component={AddProduct} />
                <Route path="/profile/info" component={ProfileInfo} />
                <Route path="/profile/:productId" children={<EditProduct />} />
                <Route path="/solds" component={ProductsSold} />
                <Route path="/product/:productId" children={<Product />} />
                <Route path="/address" component={CreateAddress} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes