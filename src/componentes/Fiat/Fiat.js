import React from 'react' 
import Titulo from '../Titulo/Titulo'
import FiatLogo from '../imagens/FiatLogo.png'


import './Fiat.css'


export default function Chevrolet() {
    return (
        <div>
            <Titulo text = "Carros Fiat" />
            <div className="fiat">
                <figure>
                    <img className="logo" src={FiatLogo} alt=""></img>
                </figure>
            </div>

        </div>
    )
}