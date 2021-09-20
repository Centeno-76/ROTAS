import React from 'react' 
import Titulo from '../Titulo/Titulo'
import FordIMG from '../imagens/FordIMG.png'

import './Ford.css'


export default function Ford() {
    return (
        <div>
            <Titulo text = "Carros Ford" />
            <div className="ford">
                <figure>
                <img className="logo" src={FordIMG} alt=""></img>
                </figure>
            </div>

        </div>
    )
}