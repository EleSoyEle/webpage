import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {React, useState} from "react";
import { Route, useNavigate, Routes } from 'react-router-dom';
import jsPDF from 'jspdf';
import Table from './Table';

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
                        
                            <input id="file" 
                            type="file" 
                            name="static_file" 
                            accept='image/*'
                            
                            className='btn btn-primary' onChange={uploadFile}/>

                            <button onClick={() => {if(imgd) downloadPDF();}} 
                            className='btn btn-primary'> Upload </button>
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