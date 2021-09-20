import React from "react";
import Titulo from '../../../Titulo/Titulo'
import VwHeader from '../../VwHeader';
import GOLIMG from '../../IMG/GOLIMG.jpg'
import './Gol.css'


export default function Gol(){
    return(
        <>
            <VwHeader />
            <Titulo text="Gol"/>
            <div className="gol">
                <figure>
                    <img className="logo" src={GOLIMG} alt=""></img>
                </figure>
            </div>
        </>
    )
}