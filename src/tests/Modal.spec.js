import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/modals/Modal';

describe('Modal', () => {
  it('no renderiza si isOpen es false', () => {
    const { container } = render(<Modal isOpen={false} title="Test Modal">Hola Modal</Modal>);
    expect(container.firstChild).toBeNull();
  });

  it('muestra el contenido y el título si isOpen es true', () => {
    render(<Modal isOpen={true} title="Titulo Modal">Contenido Modal</Modal>);
    expect(screen.getByText('Titulo Modal')).not.toBeNull();
    expect(screen.getByText('Contenido Modal')).not.toBeNull();
  });

  it('cierra el modal al hacer click en el botón cerrar', () => {
    const onClose = jasmine.createSpy('onClose');
    render(<Modal isOpen={true} onClose={onClose} title="x">Modal!</Modal>);
    fireEvent.click(screen.getByText('Cerrar'));
    expect(onClose).toHaveBeenCalled();
  });

  it('cierra el modal al hacer click en el backdrop', () => {
    const onClose = jasmine.createSpy('onClose');
    render(<Modal isOpen={true} onClose={onClose} title="x">Modal!</Modal>);
    fireEvent.click(screen.getByRole('presentation'));
    expect(onClose).toHaveBeenCalled();
  });

  it('no cierra el modal al clickear dentro del contenido', () => {
    const onClose = jasmine.createSpy('onClose');
    render(
      <Modal isOpen={true} onClose={onClose} title="Titulo">
        <span data-testid="modal-inside">Aquí</span>
      </Modal>
    );
    fireEvent.click(screen.getByTestId('modal-inside'));
    expect(onClose).not.toHaveBeenCalled();
  });
});
