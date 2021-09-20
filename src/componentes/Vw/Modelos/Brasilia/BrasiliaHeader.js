import React from 'react' 
import { Link } from 'react-router-dom' 

import '../../../Header/Header.css' 

export default function BrasiliaHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/vw">Voltar</Link></li>
                        <li><Link to="/vw/brasilia/mecanica">Mecânica</Link></li>
                        <li><Link to="/vw/brasilia/eletrica">Elétrica</Link></li>
                        <li><Link to="/vw/brasilia/eletronica">Eletrônica</Link></li>
                        <li><Link to="/vw/brasilia/suspensao">Suspensão</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}