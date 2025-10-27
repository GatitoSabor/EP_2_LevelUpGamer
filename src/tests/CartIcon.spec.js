import React from 'react';
import { render } from '@testing-library/react';
import CartIcon from '../components/ui/CartIcon';

describe('CartIcon', () => {
  it('renderiza correctamente con 0 ítems', () => {
    const { getByLabelText } = render(<CartIcon itemCount={0} />);
    expect(getByLabelText(/carrito/i)).toBeInTheDocument();
  });

  it('muestra el contador si hay 3 ítems', () => {
    const { getByText } = render(<CartIcon itemCount={3} />);
    expect(getByText("3")).toBeInTheDocument();
  });

  it('renderiza solo el ícono si el contador no está explícito', () => {
    const { getByLabelText } = render(<CartIcon />);
    expect(getByLabelText(/carrito/i)).toBeInTheDocument();
  });

  it('soporta cambio de props (itemCount cambia)', () => {
    const { rerender, getByText } = render(<CartIcon itemCount={1} />);
    expect(getByText("1")).toBeInTheDocument();
    rerender(<CartIcon itemCount={9} />);
    expect(getByText("9")).toBeInTheDocument();
  });
});
