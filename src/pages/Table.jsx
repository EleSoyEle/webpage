import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';
import Img2pdf from './img2pdf';

function Table(){
    let navigate = useNavigate();
    function ToImg2PDf(){
        navigate("/cimg")
    }

    
    return(
        <section>
            <div className='App-header'>
                <h1>Formato name</h1>
                <div className='container'>
                    <div className='row align-items'>
                        <div className='btn-group-vertical col'>
                                <button className='btn btn-outline-primary' >
                                    Menú actual
                                </button>
                                <button className='btn btn-primary' onClick={ToImg2PDf}>
                                    Convertir imagenes a pdf
                                </button>
                                <button className='btn btn-primary'>
                                    Convertir .vid a mp4
                                </button>
                        </div>
                        <div className='col'>
                            <p className='lead'>Cambia el formato de tus archivos,
                            imagenes y audio de modo gratuito</p>
                        </div>
                        <div className='col'></div>
                </div>
                </div>
            </div>
            <Routes>
                <Route
                path="/cimg"
                element={<Img2pdf />}
                ></Route>
            </Routes>
        </section>
    )
}

export default Table;