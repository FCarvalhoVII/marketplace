import React from 'react'

import api from '../../../services/api'

import './styles.css'

function ConfirmDeleteProduct({ activeDelete, handleCancel, productId }) {
    const userId = localStorage.getItem('token')

    async function handleDeleteProduct(productId) {
        try {
            await api.delete(`profile/product/${productId}`, {
                headers: {
                    Authorization: `Bearer ${userId}`
                }
            })

            window.location.reload()
        } catch(err) {
            alert('Erro ao deletar, tente novamente.')
        }
    }

    return (
        <div 
            className="confirm-delete"
            style={activeDelete ? { display: 'flex' } : { display: 'none' }}
        >
            <div className="container-delete">
                <h4>Deseja deletar o produto permanentemente?</h4>

                <div className="confirm-buttons">
                    <button className="button-cancel" onClick={() => handleCancel()}>
                        Cancelar
                    </button>

                    <button className="delete" onClick={() => handleDeleteProduct(productId)}>
                        Apagar
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteProduct