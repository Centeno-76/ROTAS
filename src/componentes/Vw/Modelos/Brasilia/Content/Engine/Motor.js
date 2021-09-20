import React from "react";
import Titulo from '../../../../../Titulo/Titulo'
import MecanicaHeader from '../MecanicaHeader';
import ENGINEBRASILIA from '../Engine/IMAGE2/ENGINEBRASILIA.jpg'

import './Engine.css'


export default function Motor(){
    return(
        <>
            <MecanicaHeader />
            <Titulo text="Motor"/>
            <div className="motor">
                <figure>
                    <img className="logo" src={ENGINEBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}