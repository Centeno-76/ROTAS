import React from "react";
import Titulo from '../../../Titulo/Titulo'
import BrasiliaHeader from "../Brasilia/BrasiliaHeader";
import brasiliaAmarela from "../../IMG/brasiliaAmarela.jpeg"

import './Brasilia.css'

export default function Brasilia(){
    return (
        <>
            <BrasiliaHeader />
            <Titulo text="Brasilia" />
            <div className="brasilia">      ]
                <figure>
                    <img className="logo" src={brasiliaAmarela} alt=""></img>
                </figure>             
            </div>
        </>
    )
}