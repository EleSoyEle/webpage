import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';

import Table from './Table';

const Img2pdf = () =>{
    let navigate = useNavigate()
    function ToInitMenu(){
        navigate("/")
    }
    return(
        <section>
            <div className='App-header'>
                <h1>Convertir imagenes a pdf</h1>
                <div className='container'>
                    <div className='row align-items'>
                        <div className='btn-group-vertical col'>
                            <button className='btn btn-primary' onClick={ToInitMenu}>
                                Menú inicial
                            </button>
                            <button className='btn btn-outline-primary'>
                                Convertir imagenes a pdf
                            </button>
                            <button className='btn btn-primary'>
                                Convertir .vid a mp4
                            </button>
                        </div>
                        <div className='col'>
                            <p className='lead'>
                                Aqui puedes subir tu archivo en formato png, jpg, jpeg</p>
                            <button className='btn btn-primary'>Subir archvio</button>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>               
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<Table/>}
                />
            </Routes>
        </section>
    )
}

export default Img2pdf;