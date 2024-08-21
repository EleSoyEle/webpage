import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {React, useState} from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';
import jsPDF from 'jspdf';
import Table from './Table';
import Makenav from "../utils.js"



const Img2pdf = () =>{
    let navigate = useNavigate()
    function ToInitMenu(){
        navigate("/")
    }
    
    const [image, setImage] = useState(null);
    const [imgd,setImgdata] = useState(null);
    const [fnm,setFname] = useState(null);
    const uploadFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const name = file.name;
            const fname = name.split(".")[0];
            // Convertir imagen a base64
            const reader = new FileReader();
            reader.onload = (e) => {
                const imgData = e.target.result;
                setImgdata(imgData);
                setFname(fname)
                //makePDF(imgData, fname);
          };
            reader.readAsDataURL(file);
        } 
        else {
            alert('Please select a file first.');
        }
    };

    function downloadPDF(){
        makePDF(imgd,fnm);
    }


    const makePDF = (imgData, name) => {
        const doc = new jsPDF();
        doc.addImage(imgData, 'JPEG', 10, 10, 180, 160); // Ajusta según sea necesario
        //doc.output('dataurlnewwindow'); // Abre el PDF en una nueva ventana
        doc.save(`${name}.pdf`); 
};
    
    return(
        <section>
            {Makenav()}
            <div className='App-header'>
                <div className='container'>
                <p className='fs-6 body_text'>
                Aqui puedes subir tu archivo en formato png, jpg, jpeg</p>
                            
                    <table>
                        <tr>
                            <td>
                            <div className='btn-group-vertical'>
                                <button className='btn btn-dark' onClick={ToInitMenu}>
                                    Menú inicial
                                </button>
                                <button className='btn btn-outline-dark'>
                                    Convertir imagenes a pdf
                                    
                                </button>
                                <button className='btn btn-dark'>
                                    Convertir .vid a mp4
                                </button>
                            </div>
                            </td>
                            <td>
                            <div className='container'>
                                <input id="file" 
                                type="file" 
                                name="static_file" 
                                accept='image/*'
                                
                                className='btn btn-dark' onChange={uploadFile}/>

                            </div>
                            </td>
                            <td>
                            <div className='container'>
                            <button onClick={() => {if(imgd) downloadPDF();}} 
                                className='btn btn-dark'> Convertir a pdf</button>
                            </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>               
            
        </section>
    )
}

export default Img2pdf;