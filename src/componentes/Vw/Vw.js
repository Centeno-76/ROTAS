import React from 'react' 
import Titulo from '../Titulo/Titulo'
import volkswagenLogo from '../imagens/volkswagenLogo.png'


import './Vw.css'
import VwHeader from './VwHeader'


export default function Vw() {
    return (
        <div>
            <VwHeader />
            <Titulo text = "Carros Vw" />
            <div className="vw">
                <figure>
                    <img className="logo" src={volkswagenLogo} alt=""></img>
                </figure>
            </div>

        </div>
    )
}