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
            <div className='App-header'>
                <div className='container'>
                <p className='fs-6 body_text'>
                Sube los archivos</p>                          
                    <table>
                        <tr>
                            <td>
                            <div className='btn-group-vertical shadow'>
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
                                
                                className='btn btn-dark shadow' onChange={uploadFile}/>

                            </div>
                            </td>
                            <td>
                            <div className='container'>
                            <button onClick={() => {if(imgd) downloadPDF();}} 
                                className='btn btn-dark shadow'> Convertir a pdf</button>
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