 import React from "react";
 import CartWidget from "./CartWidget.jsx";

 export default function NavBar(){
    return (
        <nav className="navbar">
            <h1>Ra, el gato de Apoyo Emocional</h1>
            <div className="nav-links">
                <a href="#">Inicio</a>
                <a href="#">Mensajes</a>
                <a href="#">Contacto</a>
            </div>
            <CartWidget />
        </nav>
    );
 }