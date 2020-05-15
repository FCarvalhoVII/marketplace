import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import ProductsByCategory from './pages/ByCategory'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CreateAddress from './pages/Profile/Create'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/category/:categoryId" children={<ProductsByCategory />} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/address" component={CreateAddress} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes