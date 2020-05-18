import React from 'react'

function ShowInfo({ user, addresses }) {
    return (
        <React.Fragment>
            <h2>Suas informações</h2>

            <h3>{ user }</h3>

            <hr/>

            <h4>Endereço</h4>

            {addresses.map(address => (
                <React.Fragment key={address.id}>
                    <h5>CEP: {address.zipcode}</h5>
                    <h5>Cidade: {address.city}</h5>
                    <h5>{address.street}</h5>
                    <h5>Número: {address.number}</h5>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}

export default ShowInfo