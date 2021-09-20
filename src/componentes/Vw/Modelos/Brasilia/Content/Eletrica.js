import React from "react";
import Titulo from '../../../../Titulo/Titulo'
import BrasiliaHeader from "../BrasiliaHeader";
import ELETRICABRASILIA from '../img/ELETRICABRASILIA.png'


import './Content.css'


export default function Eletrica(){
    return(
        <>
            <BrasiliaHeader />
            <Titulo text="Elétrica"/>
            <div className="eletrica">
                <figure>
                    <img className="logo" src={ELETRICABRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}