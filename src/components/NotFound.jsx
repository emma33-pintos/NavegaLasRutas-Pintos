import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>404</h1>
      <p>Página no encontrada 😿</p>
      <Link to="/"><button>Volver al inicio</button></Link>
    </div>
  );
}