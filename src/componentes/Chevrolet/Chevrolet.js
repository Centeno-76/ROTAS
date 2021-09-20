import React from 'react' 
import Titulo from '../Titulo/Titulo'
import CHEVROLETIMG from '../imagens/CHEVROLETIMG.jpg'


import './Chevrolet.css'


export default function Chevrolet() {
    return (
        <div>
            <Titulo text = "Carros Chevrolet" />
            <div className="chevrolet">
                <figure>
                    <img className="logo" src={CHEVROLETIMG} alt=""></img>
                </figure>
            </div>

        </div>
    )
}