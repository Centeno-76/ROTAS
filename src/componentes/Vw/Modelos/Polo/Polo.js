import React from "react";
import Titulo from '../../../Titulo/Titulo'
import VwHeader from '../../VwHeader';
import poloVw from '../../IMG/poloVw.png'

import './Polo.css'


export default function Polo(){
    return(
        <>
            <VwHeader />
            <Titulo text="Polo"/>
            <div className="polo">
                <figure>
                    <img className="logo" src={poloVw} alt=""></img>
                </figure>

            </div>
        </>
    )
}