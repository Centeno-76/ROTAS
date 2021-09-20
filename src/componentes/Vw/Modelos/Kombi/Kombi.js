import React from "react";
import Titulo from '../../../Titulo/Titulo'
import VwHeader from '../../VwHeader';
import KombiVw from '../../IMG/KombiVw.jpg'

import './Kombi.css'


export default function Kombi(){
    return(
        <>
            <VwHeader />
            <Titulo text="Kombi"/>
            <div className="kombi">
                <figure>
                    <img className="logo" src={KombiVw}></img>
                </figure>
            </div>
        </>
    )
}