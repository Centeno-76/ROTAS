import React from "react";
import Titulo from '../../../../Titulo/Titulo'
import MOTORBRASILIA from '../img/MOTORBRASILIA.jpg'

import './Content.css'
import MecanicaHeader from "./MecanicaHeader";

export default function Mecanica(){
    return(
        <>
            <MecanicaHeader />
            <Titulo text="Mecânica"/>
            <div className="mecanica">
                <figure>
                    <img className="logo" src={MOTORBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}