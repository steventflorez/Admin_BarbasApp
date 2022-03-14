import React from 'react'

export default function Num_cliente() {
    return (
        <div className='row'>
            <div className="col-6">
                <form >
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" placeholder='Numero de usuario' aria-label="Amount (to the nearest dollar)"/>
                            <button type="button" className="btn btn-warning">Agendar</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
