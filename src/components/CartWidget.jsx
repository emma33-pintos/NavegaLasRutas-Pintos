import React from "react";

export default function CartWidget(){
    return (
        <div style={{position: "relative", display: "inline-block"}}>
            <span style={{ fontSize: "24px"}}>💖</span>
            <span style={{
                position: "absolute",
                top: "-5px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
            }}>3
            </span>
        </div>
    );
}