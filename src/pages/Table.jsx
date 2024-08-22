import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import {Makenav,MakeFooter} from "../utils.jsx"


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
                    <div>
                        <h1 className='titles'>Fileformat</h1>
                        <p className='fs-6 body_text'>Cambia el formato de tus archivos,
                            imagenes y audio de modo gratuito</p>
                    </div>
                    <div className="container">
                        <Accordion >
                            <Accordion.Item defaultActiveKey="0" eventKey="0">
                                <Accordion.Header>Convertir imagenes a cualquier formato pdf</Accordion.Header>
                                <Accordion.Body >
                                    <p className='fs-6 lead'>Aqui puedes cambiar el formato de tus
                                    archivos a pdf</p>
                                    <button className='btn btn-dark' onClick={ToImg2PDf}>
                                        Convertir imagenes a pdf
                                    </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item defaultActiveKey="0" eventKey="1">
                                <Accordion.Header>
                                    Convertir formato .vid a formato mp4
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='fs-6 lead'>Aqui puedes cambiar el formato de tus
                                    archivos</p>
                                    <button className='btn btn-dark' onClick={ToImg2PDf}>
                                        Convertir formato .vid a mp4
                                    </button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            {MakeFooter()}
        </section>
    )
}

export default Table;