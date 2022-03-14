import React from 'react'
import Link from 'next/link'
import Nav from './Nav'

export default function Nav_cont({ children }) {
    return (
        <Nav>
             <div>
            <div className=" cont">
                <div className="row">
                    <div className="col-1">
                        <nav className='navegador bg-primary navbar navbar-dark'>
                            <ul className='navbar-nav me-auto'>
                                <li className='nav-item '>
                                    <Link href="/contable">
                                        <a className="nav-link active"  > Resumen
                                            <span className="visually-hidden">(current)</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                <Link href="/vales">
                                        <a className="nav-link active"  > Vales
                                            <span className="visually-hidden">(current)</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    <div className="col-11">
                        <div className="container">
                        {children}
                            </div>
                        
                    </div>
                </div>
            </div>


        </div>
        </Nav>
       
    )
}
