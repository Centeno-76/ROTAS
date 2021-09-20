import React from "react";
import Titulo from '../../../../Titulo/Titulo'

import BrasiliaHeader from "../BrasiliaHeader";
import ELETRONICABRASILIA from '../img/ELETRONICABRASILIA.jpg'

import './Content.css'


export default function Eletronica(){
    return(
        <>
            <BrasiliaHeader />
            <Titulo text="Eletrônica"/>
            <div className="eletronica">
                <figure>
                    <img className="logo" src={ELETRONICABRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}