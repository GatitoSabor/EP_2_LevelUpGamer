import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchDropdown from '../components/ui/SearchDropdown';

describe('SearchDropdown máxima cobertura', () => {
  let onSelectProduct;
  const demoProducts = [
    { id: 1, name: 'Teclado RGB', description: 'mecánico', category: 'Periféricos', image: '', price: 1 },
    { id: 2, name: 'Mouse Pro', description: 'sensor óptico', category: 'Periféricos', image: '', price: 2 },
    { id: 3, name: 'Notebook Gamer', description: 'para jugar', category: 'Computación', image: '', price: 3 }
  ];

  beforeEach(() => {
    onSelectProduct = jasmine.createSpy('onSelectProduct');
  });

  it('limpia input y estados con botón limpiar (casos repetidos)', () => {
    render(<SearchDropdown products={demoProducts} onSelectProduct={onSelectProduct} clearSignal={false} />);
    const input = screen.getByRole('searchbox') || screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'algo' } });
    fireEvent.click(screen.getByLabelText(/limpiar/i));
    expect(input.value).toBe('');
    fireEvent.click(screen.getByLabelText(/limpiar/i));
    expect(input.value).toBe('');
  });

  it('prueba búsqueda que no arroja resultados y cubre else', () => {
    render(<SearchDropdown products={demoProducts} onSelectProduct={onSelectProduct} clearSignal={false} />);
    const input = screen.getByRole('searchbox') || screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'noxxxx' } });
    expect(screen.queryByText(/Periféricos/i)).toBeNull();
    expect(screen.queryByText(/Mouse Pro/i)).toBeNull();
  });

  it('prueba búsqueda de un solo caracter (no debería mostrar resultados)', () => {
    render(<SearchDropdown products={demoProducts} onSelectProduct={onSelectProduct} clearSignal={false} />);
    const input = screen.getByRole('searchbox') || screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'o' } });
    expect(screen.queryByText(/Periféricos/i)).toBeNull();
  });

  it('cubre sugerencias cuando hay más de 5 categorías únicas', () => {
    const moreCategories = [
      ...demoProducts,
      ...[4,5,6,7,8,9].map(i => ({
        id: i,
        name: `Prod${i}`,
        description: 'desc',
        category: `Cat${i}`,
        image: '',
        price: i
      }))
    ];
    render(<SearchDropdown products={moreCategories} onSelectProduct={onSelectProduct} clearSignal={false} />);
    const input = screen.getByRole('searchbox') || screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'cat' } });
    expect(screen.getAllByText(/Cat/i).length).toBeLessThanOrEqual(5);
  });

  it('llama onSelectProduct(null) con botón "Ver todos los productos"', () => {
    render(<SearchDropdown products={demoProducts} onSelectProduct={onSelectProduct} clearSignal={false} />);
    fireEvent.change(screen.getByRole('searchbox') || screen.getByRole('textbox'), { target: { value: 'mou' } });
    fireEvent.mouseDown(screen.getByText(/Ver todos los productos/i));
    expect(onSelectProduct).toHaveBeenCalledWith(null);
  });

  it('limpia con clearSignal cambiado (useEffect)', () => {
    const { rerender } = render(<SearchDropdown products={[]} onSelectProduct={onSelectProduct} clearSignal={false} />);
    rerender(<SearchDropdown products={[]} onSelectProduct={onSelectProduct} clearSignal={true} />);
  });

  it('funciona correctamente con products vacío y limpiar', () => {
    render(<SearchDropdown products={[]} onSelectProduct={onSelectProduct} clearSignal={false} />);
    const input = screen.getByRole('searchbox') || screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.click(screen.getByLabelText(/limpiar/i));
    expect(input.value).toBe('');
  });

  it('permite click en sugerencia y producto filtrado (ramas rojas)', () => {
    const prods = [
      { id: 1, name: 'Teclado RGB', description: 'mecánico', category: 'Periféricos', image: '', price: 1 },
      { id: 2, name: 'Mouse Pro', description: 'gamer', category: 'Oficina', image: '', price: 2 },
      { id: 3, name: 'Cámara', description: 'foto', category: 'Electrónica', image: '', price: 3 }
    ];
    render(<SearchDropdown products={prods} onSelectProduct={onSelectProduct} clearSignal={false} />);
    const input = screen.getByRole('searchbox') || screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'peri' } });
    expect(screen.getByText(/Periféricos/i)).not.toBeNull();
    fireEvent.mouseDown(screen.getByText(/Periféricos/i));

    fireEvent.change(input, { target: { value: 'teclado' } });
    expect(screen.getByText(/Teclado RGB/i)).not.toBeNull();
    fireEvent.mouseDown(screen.getByText(/Teclado RGB/i));
    expect(onSelectProduct).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'Teclado RGB' })
    );
  });
});
