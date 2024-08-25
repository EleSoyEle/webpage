import React from "react";
import logo from './logo64withbg.png'
import './App.css'
import { useNavigate } from "react-router-dom";


export function Makenav(){
    return(
    <nav className="navbar navbar-dark bg-dark">
                <div class="container">
                    <img src={logo} alt="Logo" className="img-fluid"/>
                    <a class="navbar-brand mb-0 h1 fst-italic" href="/">Fileformat</a>
                </div>
    </nav>)
}

export function MakeFooter(){
    let navigate = useNavigate();
    function gotoInfo(){
        navigate("/info")
    }
    return(
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
            <p className="fs-6 lead">Déjanos tu comentario:</p>
            <form>
              <textarea placeholder="Escribe tu comentario" className="form-control mb-3"></textarea>
              <button type="submit" className="btn btn-light">Enviar comentarios</button>
            </form>
            <br></br>
            <button className="btn btn-dark" onClick={gotoInfo}>Mas informacion sobre nostros</button>
            </div>
        </footer>
    )
}
