import React from "react";
import Titulo from '../../../Titulo/Titulo'
import VwHeader from '../../VwHeader';
import FUSCAIMG from '../../IMG/FUSCAIMG.jpg'

import './Fusca.css'


export default function Fusca(){
    return(
        <>
            <VwHeader />
            <Titulo text="Fusca"/>
            <div className="fusca">
                <figure>
                    <img className="logo" src={FUSCAIMG} alt=""></img>
                </figure>
            </div>
        </>
    )
}