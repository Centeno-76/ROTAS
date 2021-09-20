import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="menu">
             <nav className="navMenu">
               <ul>
                  <li><Link to ="/">Home</Link></li>
                  <li><Link to ="/fiat">Fiat</Link></li>
                  <li><Link to ="/ford">Ford</Link></li>
                  <li><Link to ="/chevrolet">Chevrolet</Link></li>
                  <li><Link to ="/vw">VW</Link></li>
                  <li><Link to ="/hyundai">Hyundai</Link></li>
               </ul>
            </nav>
        </header>
    )
}