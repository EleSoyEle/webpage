import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';
import Img2pdf from './img2pdf';
import Makenav from "../utils.js"


function Table(){
    let navigate = useNavigate();
    function ToImg2PDf(){
        navigate("/cimg")
    }


    return(
        <section>
            {Makenav()}
            <div className='App-header'>
                <div className='container'>
                    <div className='container'>
                        <h1>Formato name</h1>
                        <p className='fs-6'>Cambia el formato de tus archivos,
                            imagenes y audio de modo gratuito</p>
                    </div>

                    <div className='btn-group-vertical'>
                        <button className='btn btn-outline-dark' >
                            Menú actual
                        </button>
                        <button className='btn btn-dark' onClick={ToImg2PDf}>
                            Convertir imagenes a pdf
                        </button>
                        <button className='btn btn-dark'>
                            Convertir .vid a mp4
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table;