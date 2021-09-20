import React from 'react' 
import Titulo from '../Titulo/Titulo'
import HyundaiLOGO from '../imagens/HyundaiLOGO.png'


import './Hyundai.css'


export default function Hyunudai() {
    return (
        <div>
            <Titulo text = "Carros Hyundai" />
            <div className="hyundai">
                <figure>
                    <img className="logo" src={HyundaiLOGO } alt=""></img>
                </figure>
            </div>

        </div>
    )
}