import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/layout/Footer';

describe('Footer', () => {
  it('muestra el texto de derechos reservados', () => {
    render(<Footer />);
    expect(screen.getByText(/levelup-gamer todos los derechos reservados/i)).not.toBeNull();
  });

  it('tiene enlace a Centro de ayuda', () => {
    render(<Footer />);
    const ayudaLink = screen.getByText(/centro de ayuda/i);
    expect(ayudaLink.tagName).toBe('A');
    expect(ayudaLink.getAttribute('href')).toBe('/centro-de-ayuda');
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
    expect(screen.getByText(/somos una empresa dedicada/)).not.toBeNull();
  });

  it('muestra los íconos de redes sociales', () => {
    render(<Footer />);
    const instagram = screen.getByRole('link', { name: /instagram/i });
    const facebook = screen.getByRole('link', { name: /facebook/i });
    const twitter = screen.getByRole('link', { name: /twitter/i });
    const whatsapp = screen.getByRole('link', { name: /whatsapp/i });
    expect(instagram.getAttribute('href')).toBe('https://instagram.com');
    expect(facebook.getAttribute('href')).toBe('https://facebook.com');
    expect(twitter.getAttribute('href')).toBe('https://twitter.com');
    expect(whatsapp.getAttribute('href')).toBe('https://web.whatsapp.com/');
  });
});
