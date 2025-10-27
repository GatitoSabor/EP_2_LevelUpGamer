import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/layout/Footer';

describe('Footer', () => {
  it('muestra el texto de derechos reservados', () => {
    render(<Footer />);
    expect(screen.getByText(/levelup-gamer todos los derechos reservados/i)).toBeInTheDocument();
  });

  it('tiene enlace a Centro de ayuda', () => {
    render(<Footer />);
    const ayudaLink = screen.getByText(/centro de ayuda/i);
    expect(ayudaLink.tagName).toBe('A');
    expect(ayudaLink).toHaveAttribute('href', '/centro-de-ayuda');
  });

  it('llama a onNavigate al hacer click en Formulario de contacto y Términos', () => {
    const onNavigate = jasmine.createSpy('onNavigate');
    render(<Footer onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText(/formulario de contacto/i));
    expect(onNavigate).toHaveBeenCalledWith('contacto');
    fireEvent.click(screen.getByText(/términos y condiciones/i));
    expect(onNavigate).toHaveBeenCalledWith('terminos');
  });

  it('abre el modal de Quiénes somos', () => {
    render(<Footer />);
    fireEvent.click(screen.getByText(/quiénes somos/i));
    expect(screen.getByText(/somos una empresa dedicada/)).toBeInTheDocument();
  });

  it('muestra los íconos de redes sociales', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://instagram.com');
    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute('href', 'https://facebook.com');
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', 'https://twitter.com');
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', 'https://web.whatsapp.com/');
  });
});
