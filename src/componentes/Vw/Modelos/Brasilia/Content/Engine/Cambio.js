import React from "react";
import Titulo from '../../../../../Titulo/Titulo'
import MecanicaHeader from '../MecanicaHeader';
import CAMBIOBRASILIA from '../Engine/IMAGE2/CAMBIOBRASILIA.jpg'

import './Engine.css'


export default function Cambio(){
    return(
        <>
            <MecanicaHeader />
            <Titulo text="Câmbio"/>
            <div className="cambio">
                <figure>
                    <img className="logo" src={CAMBIOBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}