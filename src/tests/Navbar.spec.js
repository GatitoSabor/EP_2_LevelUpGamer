import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '../components/layout/Navbar';

describe('Navbar - cobertura completa de navegación', () => {
  let onNavChange, onSelectProduct, onLogout;
  const baseProps = {
    user: null,
    cartCount: 2,
    products: [{ nombre: 'Mouse Pro' }],
    clearSignal: false
  };

  beforeEach(() => {
    onNavChange = jasmine.createSpy('onNavChange');
    onSelectProduct = jasmine.createSpy('onSelectProduct');
    onLogout = jasmine.createSpy('onLogout');
  });

  it('click en el logo navega a home', () => {
    render(<Navbar {...baseProps} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    const logoDiv = screen.getByText(/Level-Up Gamer/i).closest('div');
    fireEvent.click(logoDiv);
    expect(onNavChange).toHaveBeenCalledWith('home');
  });

  it('abre el menú Comunidad, navega a Noticias y Eventos', async () => {
    render(<Navbar {...baseProps} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    const comunidadBtn = screen.getByText(/Comunidad/i);
    fireEvent.click(comunidadBtn);

    const noticiasBtn = await screen.findByText(/Noticias/i, {}, { timeout: 1000 });
    fireEvent.click(noticiasBtn);
    expect(onNavChange).toHaveBeenCalledWith('noticias');

    const eventosBtn = await screen.findByText(/Eventos/i, {}, { timeout: 1000 });
    fireEvent.click(eventosBtn);
    expect(onNavChange).toHaveBeenCalledWith('eventos');

    fireEvent.mouseLeave(comunidadBtn);
  });

  it('navega a Mi Cuenta cuando hay usuario logueado', () => {
    render(<Navbar {...baseProps} user={{ name: 'Mario' }} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    fireEvent.click(screen.getByText(/Mi Cuenta/i));
    expect(onNavChange).toHaveBeenCalledWith('miCuenta');
  });

  it('llama a onLogout cuando se hace click en cerrar sesión', () => {
    render(<Navbar {...baseProps} user={{ name: 'Mario' }} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    fireEvent.click(screen.getByText(/Cerrar sesión/i));
    expect(onLogout).toHaveBeenCalled();
  });

  it('navega a Login cuando no hay usuario', () => {
    render(<Navbar {...baseProps} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    fireEvent.click(screen.getByText(/Registro \/ Login/i));
    expect(onNavChange).toHaveBeenCalledWith('login');
  });

  it('navega a Catálogo', () => {
    render(<Navbar {...baseProps} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    fireEvent.click(screen.getByText(/Catálogo/i));
    expect(onNavChange).toHaveBeenCalledWith('catalogo');
  });

  it('navega a Carrito', () => {
    render(<Navbar {...baseProps} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    fireEvent.click(screen.getByText("2"));
    expect(onNavChange).toHaveBeenCalledWith('carrito');
  });

  it('renderiza badge del carrito si cartCount > 0', () => {
    render(<Navbar {...baseProps} onNavChange={onNavChange} onSelectProduct={onSelectProduct} onLogout={onLogout} />);
    expect(screen.getByText('2')).not.toBeNull();
  });
});
