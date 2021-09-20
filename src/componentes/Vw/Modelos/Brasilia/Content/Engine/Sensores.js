import React from "react";
import Titulo from '../../../../../Titulo/Titulo'
import MecanicaHeader from '../MecanicaHeader';
import SENSORESBRASILIA from '../Engine/IMAGE2/SENSORESBRASILIA.jpg'

import './Engine.css'


export default function Sensores(){
    return(
        <>
            <MecanicaHeader />
            <Titulo text="Sensores"/>
            <div className="sensores">
                <figure>
                    <img className="logo" src={SENSORESBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}