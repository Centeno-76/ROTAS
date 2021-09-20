
import React from 'react'
import { Link } from 'react-router-dom'



import '../Header/Header.css'

export default function VwHeader() {
    return ( 
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to ="/">Voltar</Link></li>
                        <li><Link to ="/vw/brasilia">BRASÍLIA</Link></li>
                        <li><Link to ="/vw/fusca">FUSCA</Link></li>
                        <li><Link to ="/vw/kombi">KOMBI</Link></li>
                        <li><Link to ="/vw/polo">POLO</Link></li>
                        <li><Link to ="/vw/gol">GOL</Link></li>                  
                    </ul>
                </nav>
            </header>
        </>
            
    )
}