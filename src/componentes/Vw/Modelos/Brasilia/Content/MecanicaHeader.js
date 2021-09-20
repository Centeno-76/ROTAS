import React  from "react";   
import { Link } from "react-router-dom";
import '../../../../Header/Header.css'

export default function MecanicaHeader(){
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/vw/brasilia">Voltar</Link></li>
                        <li><Link to="/vw/brasilia/mecanica/motor">Motor</Link></li>
                        <li><Link to="/vw/brasilia/mecanica/pedais">Pedais</Link></li>
                        <li><Link to="/vw/brasilia/mecanica/cambio">Câmbio</Link></li>
                        <li><Link to="/vw/brasilia/mecanica/volante">Volante</Link></li>
                        <li><Link to="/vw/brasilia/mecanica/sensores">Sensores</Link></li>                        
                    </ul>
                </nav> 

            </header>
        </>
    )
}