import React from 'react';

export default function Cart({ cart, incrementQuantity, decrementQuantity, removeFromCart, totalPrice }) {
  return (
    <section className="cart">
      <h2>
        Carro ({cart.length} {cart.length === 1 ? 'item' : 'items'})
      </h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>
                <div className="cart-item-pricing">
                  <p className="price-discounted">
                    ${ (item.price * (1 - (item.discount ?? 0))).toLocaleString('es-CL') }
                  </p>
                  {item.discount && item.discount > 0 && (
                    <p className="price-original">${item.price.toLocaleString('es-CL')}</p>
                  )}
                  <p className="payment-method">Transferencias</p>
                  <p className="subtotal">
                    ${ ((item.price * (1 - (item.discount ?? 0))) * item.quantity).toLocaleString('es-CL') }
                  </p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        <aside className="cart-summary">
          <h3>Resumen ({cart.length} productos)</h3>
          <div className="summary-row">
            <p>Pago con transferencias</p>
            <p className="summary-price">${totalPrice.toLocaleString('es-CL')}</p>
            <small>Transferencia y Banco Estado</small>
          </div>
          <div className="summary-row">
            <p>Otros medios de pago</p>
            <p className="summary-price">${(totalPrice / 0.94).toLocaleString('es-CL')}</p>
            <small>Webpay/Onepay</small>
          </div>
          <div className="summary-total">
            <p>TOTAL</p>
            <p>-</p>
          </div>
          <button className="checkout-btn">Iniciar pago</button>
        </aside>
      </div>
    </section>
  );
}
