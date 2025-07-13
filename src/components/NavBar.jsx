import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
    return (
        <nav className="navbar">
            <h1>
                <Link to="/" style={{ textDecoration: "none", color: "#4a4a4a" }}>
                    Ra, el gato de Apoyo Emocional
                </Link>
            </h1>
            <div className="navlinks">
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/category/autoayuda">Autoayuda</NavLink>
                <NavLink to="/category/motivacion">Motivación</NavLink>
                <NavLink to="/category/psicologia">Psicología</NavLink>
                <NavLink to="/cart">Carrito</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}