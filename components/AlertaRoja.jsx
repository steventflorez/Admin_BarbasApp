import React from 'react'

export default function AlertaRoja({titulo,tipo,descripcion,estado,chengueAlerta}) {

    const claseContenedor = `alert alert-dismissible ${tipo} ${estado}`

    const close = ()=>{
        chengueAlerta("n","u","ll")
    }
    return (
        <div>
            <div className={claseContenedor}>
                <button type="button" onClick={close} className="btn-close" data-bs-dismiss="alert"></button>
                <h4 className="alert-heading">{titulo}</h4>
                <p className="mb-0">{descripcion}</p>
            </div>
        </div>
    )
}
