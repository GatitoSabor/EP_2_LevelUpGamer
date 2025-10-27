import React from 'react';
import { render } from '@testing-library/react';
import CartIcon from '../components/ui/CartIcon';

describe('CartIcon', () => {
  it('renderiza correctamente con 0 ítems', () => {
    const { getByLabelText } = render(<CartIcon itemCount={0} />);
    const icon = getByLabelText(/carrito/i);
    expect(icon).not.toBeNull();
  });

  it('muestra el contador si hay 3 ítems', () => {
    const { getByText } = render(<CartIcon itemCount={3} />);
    const contador = getByText("3");
    expect(contador).not.toBeNull();
  });

  it('renderiza solo el ícono si el contador no está explícito', () => {
    const { getByLabelText } = render(<CartIcon />);
    const icon = getByLabelText(/carrito/i);
    expect(icon).not.toBeNull();
  });

  it('soporta cambio de props (itemCount cambia)', () => {
    const { rerender, getByText } = render(<CartIcon itemCount={1} />);
    let contador = getByText("1");
    expect(contador).not.toBeNull();
    rerender(<CartIcon itemCount={9} />);
    contador = getByText("9");
    expect(contador).not.toBeNull();
  });
});
