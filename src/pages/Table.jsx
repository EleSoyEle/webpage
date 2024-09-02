import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import {Makenav,MakeFooter} from "../utils.jsx"
import { Analytics } from "@vercel/analytics/react"
import { Helmet } from 'react-helmet';


function Table(){
    let navigate = useNavigate();
    function ToImg2PDf(){
        navigate("/convert2pdf")
    }


    return(
        <section>
            {Makenav()}
            <Helmet>
            <script type='text/javascript' src='//pl24162292.cpmrevenuegate.com/39/f6/c1/39f6c10605a31bd88cfe529d7c45edea.js'></script>
            </Helmet>
            <div className='App-header'>
                <div className='container'>
                    <div>
                        <h1 className='titles'>Fileformat</h1>
                        <p className='fs-6 body_text lead'>Cambia el formato de tus archivos,
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
            <Analytics/>
            {MakeFooter()}
        </section>
    )
}

export default Table;