import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import {Makenav,MakeFooter} from "../utils.jsx"
import { Accordion } from 'react-bootstrap';
import { Analytics } from '@vercel/analytics/react';
import logo from '../logo192withbg.png'
import { Helmet } from 'react-helmet';


const InfoPage = () => {
    return (
        <section>
            {Makenav()}
            <div className='container'>
                
                <div className='cint'>
                    <img src={logo} className='rounded mx-auto d-block'/>
                </div>

                <br></br>
                <p className='fs-2 titles'>¿Cómo funciona nuestra herramienta de conversión de imágenes a PDF?</p>
                <hr></hr>
                <p className='fs-6 lead'>
                    Nuestra página, <b>fileformat</b>, está diseñada para ofrecer una experiencia simple y efectiva al convertir
                    tus imágenes en formatos populares, como PNG o JPG, a archivos PDF.
                    La interfaz de usuario está organizada de manera clara,
                    asegurando que cualquier persona pueda utilizarla sin complicaciones.
                </p>
                
                <p className='fs-4' titles>
                    Proceso de conversión paso a paso
                </p>
                <p className='fs-6 lead'>
                <b>Sube tu Imagen: </b>Para comenzar, simplemente selecciona el archivo de imagen que deseas convertir.
                Puedes subir imágenes en formatos PNG o JPG.
                El formulario de carga de archivos está diseñado para aceptar cualquier tipo de imagen,
                lo que permite una flexibilidad total a la hora de trabajar con diferentes tipos de archivos.
                </p>
                <p className='fs-6 lead'>
                <b>Convertir y Descargar:</b> Una vez que hayas subido tu imagen, nuestra herramienta procesa la conversión en segundos.
                Al presionar el botón "Descargar", nuestro código se encarga de tomar la imagen seleccionada y convertirla a un archivo PDF,
                 que luego podrás descargar directamente en tu dispositivo.
                </p>
                <p className='fs-6 lead'>
                Este proceso de conversión se realiza directamente en tu navegador,
                lo que significa que no tienes que preocuparte por la seguridad de tus archivos,
                ya que no se suben a ningún servidor externo. Además, al ser una herramienta completamente gratuita,
                puedes convertir todas las imágenes que desees sin limitaciones ni costos ocultos.
                </p>
                <p className='fs-4'>
                Detalles Técnicos del Código
                </p>
                <p className='fs-6 lead'>
                El código que impulsa esta funcionalidad se basa en JavaScript y React. Cuando subes una imagen a través del componente &lt;input&gt; en nuestro formulario,
                una función llamada <b>uploadFile()</b> se ejecuta para manejar el archivo seleccionado.
                Posteriormente, cuando haces clic en el botón de descarga, la función <b>downloadPDF() </b> 
                 se asegura de que la imagen se convierta correctamente a PDF.
            </p>    
            <p className='fs-6 lead'>
                El uso de bibliotecas modernas como React nos permite crear una interfaz de usuario dinámica que actualiza el estado
                en tiempo real. Además, estamos integrando componentes como Accordion para organizar el contenido y garantizar una
                experiencia de usuario fluida.
            </p>
            <p className='fs-6 lead'>
                Este flujo simplificado es ideal para cualquiera que necesite una conversión rápida y segura de imágenes a PDF sin
                la necesidad de instalar software adicional.
                </p>
            </div>
            <br></br>
            <Analytics/>
            {MakeFooter()}
        </section>
    )
}

export default InfoPage