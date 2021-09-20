import React from "react";
import Titulo from '../../../../../Titulo/Titulo'
import MecanicaHeader from '../MecanicaHeader';
import VOLANTEBRASILIA from '../Engine/IMAGE2/VOLANTEBRASILIA.jpeg'

import './Engine.css'


export default function Volante(){
    return(
        <>
            <MecanicaHeader />
            <Titulo text="Volante"/>
            <div className="volante">
                <figure>
                    <img className="logo" src={VOLANTEBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}