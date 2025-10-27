import React from "react";

export default function CartIcon({ itemCount }) {
  return (
    <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }}>
      <img
        src="/ruta/a/tu-icono-carrito.png" 
        alt="Carrito"
        style={{ width: 32, height: 32 }}
      />
      {itemCount > 0 && (
        <div style={{
          position: "absolute",
          top: -5,
          right: -5,
          backgroundColor: "red",
          borderRadius: "50%",
          color: "white",
          width: 20,
          height: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12,
          fontWeight: "bold",
        }}>
          {itemCount}
        </div>
      )}
    </div>
  );
}
