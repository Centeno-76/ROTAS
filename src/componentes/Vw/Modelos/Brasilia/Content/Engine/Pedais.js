import React from "react";
import Titulo from '../../../../../Titulo/Titulo'
import MecanicaHeader from '../MecanicaHeader';
import PEDAISBRASILIA from '../Engine/IMAGE2/PEDAISBRASILIA.jpg'

import './Engine.css'


export default function Pedais(){
    return(
        <>
            <MecanicaHeader />
            <Titulo text="Pedais"/>
            <div className="pedais">
                <figure>
                    <img className="logo" src={PEDAISBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}