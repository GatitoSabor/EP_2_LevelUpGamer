import React, { useState } from 'react';

export default function Cart({ cart, incrementQuantity, decrementQuantity, removeFromCart, totalPrice }) {
  return React.createElement(
    'section',
    { className: 'cart' },
    React.createElement('h2', null, `Carro (${cart.length} ${cart.length === 1 ? 'item' : 'items'})`),
    React.createElement(
      'div',
      { className: 'cart-content' },
      React.createElement(
        'div',
        { className: 'cart-items' },
        cart.length === 0
          ? React.createElement('p', null, 'No hay productos en el carrito.')
          : cart.map(item =>
              React.createElement(
                'div',
                { key: item.id, className: 'cart-item' },
                React.createElement('img', {
                  src: item.image,
                  alt: item.name,
                  className: 'cart-item-image',
                }),
                React.createElement(
                  'div',
                  { className: 'cart-item-info' },
                  React.createElement('h3', null, item.name),
                  React.createElement('p', null, item.description),
                  React.createElement(
                    'div',
                    { className: 'quantity-controls' },
                    React.createElement(
                      'button',
                      { onClick: () => decrementQuantity(item.id) },
                      '-',
                    ),
                    React.createElement('span', null, item.quantity),
                    React.createElement(
                      'button',
                      { onClick: () => incrementQuantity(item.id) },
                      '+',
                    ),
                  ),
                ),
                React.createElement(
                  'div',
                  { className: 'cart-item-pricing' },
                  React.createElement(
                    'p',
                    { className: 'price-discounted' },
                    `$${(item.price * 0.94).toLocaleString('es-CL')}`,
                  ),
                  React.createElement(
                    'p',
                    { className: 'price-original' },
                    `$${item.price.toLocaleString('es-CL')}`,
                  ),
                  React.createElement(
                    'p',
                    { className: 'payment-method' },
                    'Transferencias',
                  ),
                  React.createElement(
                    'p',
                    { className: 'subtotal' },
                    `$${(item.price * item.quantity * 0.94).toLocaleString('es-CL')}`,
                  ),
                ),
                React.createElement(
                  'button',
                  {
                    className: 'remove-btn',
                    onClick: () => removeFromCart(item.id),
                  },
                  'Eliminar',
                ),
              ),
            ),
      ),
      React.createElement(
        'aside',
        { className: 'cart-summary' },
        React.createElement('h3', null, `Resumen (${cart.length} productos)`),
        React.createElement(
          'div',
          { className: 'summary-row' },
          React.createElement('p', null, 'Pago con transferencias'),
          React.createElement(
            'p',
            { className: 'summary-price' },
            `$${(totalPrice * 0.94).toLocaleString('es-CL')}`,
          ),
          React.createElement('small', null, 'Transferencia y Banco Estado'),
        ),
        React.createElement(
          'div',
          { className: 'summary-row' },
          React.createElement('p', null, 'Otros medios de pago'),
          React.createElement(
            'p',
            { className: 'summary-price' },
            `$${totalPrice.toLocaleString('es-CL')}`,
          ),
          React.createElement('small', null, 'Webpay/Onepay'),
        ),
        React.createElement(
          'div',
          { className: 'summary-total' },
          React.createElement('p', null, 'TOTAL'),
          React.createElement('p', null, '-'),
        ),
        React.createElement(
          'button',
          { className: 'checkout-btn' },
          'Iniciar pago',
        ),
      ),
    ),
  );
}
