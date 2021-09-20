import React from "react";
import Titulo from '../../../../Titulo/Titulo'
import BrasiliaHeader from "../BrasiliaHeader";
import SUSPENSAOBRASILIA from '../img/SUSPENSAOBRASILIA.jpg'

import './Content.css'


export default function Suspensao(){
    return(
        <>
            <BrasiliaHeader />
            <Titulo text="Suspensão"/>
            <div className="suspensao">
                <figure>
                    <img className="logo" src={SUSPENSAOBRASILIA} alt=""></img>
                </figure>
            </div>
        </>
    )
}