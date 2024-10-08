import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import {Makenav,MakeFooter} from "../utils.jsx"
import { Accordion } from 'react-bootstrap';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet';



const Img2pdf = () =>{
    let navigate = useNavigate()
    function ToInitMenu(){
        navigate("/")
    }
    const [w, setw] = useState(null);
    const [h, seth] = useState(null);
    const [image, setImage] = useState(null);
    const [imgd,setImgdata] = useState(null);
    const [fnm,setFname] = useState(null);
    const uploadFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const name = file.name;
            console.log(file)
            const fname = name.split(".")[0];
            // Convertir imagen a base64
            const reader = new FileReader();
            reader.onload = (e) => {
                const imgData = e.target.result;
                setImgdata(imgData);
                setFname(fname)
                const img = new Image();
            img.onload = () => {
                const width = img.width;
                const height = img.height;
                setw(width);
                seth(height);
            };
          };
            reader.readAsDataURL(file);
        } 
        else {
            alert('Please select a file first.');
        }
    };

    function downloadPDF(){
        makePDF(imgd,fnm,w,h);
    }


    const makePDF = (imgData, name,wi,he) => {
        const doc = new jsPDF();
        doc.addImage(imgData, 'JPEG', 10, 10, wi, he);
        //doc.output('dataurlnewwindow'); // Abre el PDF en una nueva ventana
        doc.save(`${name}.pdf`); 
};
    
    return(
        <section>
            {Makenav()}
            <Helmet>
            <script type='text/javascript' src='//pl24162292.cpmrevenuegate.com/39/f6/c1/39f6c10605a31bd88cfe529d7c45edea.js'></script>
            <script type='text/javascript' src='//pl24155224.cpmrevenuegate.com/37/c5/b1/37c5b14324f51c9556082bd1d0bd8c49.js'></script>
            </Helmet>
            <div className='App-header'>
                <div className='container'>
                <h1 className='titles'>Fileformat</h1>
                <p className='fs-6 body_text lead'>Cambia el formato de tus archivos,
                    imagenes y audio de modo gratuito</p>
                <p className='fs-6 body_text'>
                Sube los archivos</p>                          
                <Accordion>
                    <Accordion.Item  eventKey='0'>
                        <Accordion.Header>Sube la imagen en formato png o jpg</Accordion.Header>
                        <Accordion.Body>
                            <div className='container'>
                                <p className='fs-6 lead'>Selecciona el archivo</p>
                                <input id="file" 
                                type="file" 
                                name="static_file" 
                                accept='image/*'
                                className='btn btn-dark' onChange={uploadFile}/>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Descarga el archivo</Accordion.Header>
                            <Accordion.Body>
                            <div className='container'>
                            <button onClick={() => {if(imgd) downloadPDF();}} 
                                className='btn btn-dark shadow'> Descargar</button>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion>
                <br></br>
                <p className='fs-6 lead'>
                    El código que impulsa esta funcionalidad se basa en JavaScript y React. Cuando subes una imagen a través del componente &lt;input&gt; en nuestro formulario,
                    una función llamada <b>uploadFile()</b> se ejecuta para manejar el archivo seleccionado.
                    Posteriormente, cuando haces clic en el botón de descarga, la función <b>downloadPDF() </b> 
                    se asegura de que la imagen se convierta correctamente a PDF.
                </p>
                <p className='fs-6 lead'>
                    Al no tener que hacer peticiones a un servidor, la descarga es mucho mas rapida
                    que con otras herramientas
                </p>
                </div>
            </div>
            <Analytics/>
            {MakeFooter()}
        </section>
    )
}

export default Img2pdf;