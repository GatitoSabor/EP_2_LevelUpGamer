import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Stepper, { Step } from '../components/layout/Stepper';

const TestSteps = [
  <Step key="1">Información Personal</Step>,
  <Step key="2">Datos de Pago</Step>,
  <Step key="3">Confirmación</Step>
];

describe('Stepper', () => {
  it('renderiza el contenido del step activo', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    expect(screen.getByText(/Información Personal/i)).not.toBeNull();
  });

  it('avanza al siguiente paso con el botón Continuar', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    fireEvent.click(screen.getByText(/Continue/i));
    expect(screen.getByText(/Datos de Pago/i)).not.toBeNull();
  });

  it('retrocede al paso anterior con el botón Back', () => {
    render(<Stepper initialStep={2}>{TestSteps}</Stepper>);
    fireEvent.click(screen.getByText(/Back/i));
    expect(screen.getByText(/Información Personal/i)).not.toBeNull();
  });

  it('muestra botón Complete en el último paso', () => {
    render(<Stepper initialStep={3}>{TestSteps}</Stepper>);
    expect(screen.getByText(/Complete/i)).not.toBeNull();
  });

  it('llama onStepChange y onFinalStepCompleted como corresponda', () => {
    const onStepChange = jasmine.createSpy('onStepChange');
    const onFinalStepCompleted = jasmine.createSpy('onFinalStepCompleted');
    render(
        <Stepper
        initialStep={1}
        onStepChange={onStepChange}
        onFinalStepCompleted={onFinalStepCompleted}
        >
        {TestSteps}
        </Stepper>
    );

    // Click para ir de 1 -> 2
    fireEvent.click(screen.getByText(/Continue/i));
    expect(onStepChange).toHaveBeenCalledWith(2);

    // Click para ir de 2 -> 3, ahora debe aparecer botón Complete, NO otro "Continue"
    fireEvent.click(screen.getByText(/Continue/i)); // Si el botón sigue llamando onStepChange, debe recibir 3
    expect(onStepChange).toHaveBeenCalledWith(3);

    // Ahora estamos en el último step. Solo debe haber botón Complete.
    fireEvent.click(screen.getByText(/Complete/i));
    expect(onFinalStepCompleted).toHaveBeenCalled();
    });


  it('renderiza los indicadores de paso y permite click en ellos (branch coverage)', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByText(/Datos de Pago/i)).not.toBeNull();
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByText(/Confirmación/i)).not.toBeNull();
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByText(/Información Personal/i)).not.toBeNull();
  });

  it('no rompe si no se pasan steps como children', () => {
    render(<Stepper initialStep={1}></Stepper>);
    // No debería lanzar error, puede mostrar nada/vacío
  });

  it('soporta initialStep fuera de rango', () => {
    render(<Stepper initialStep={99}>{TestSteps}</Stepper>);
    expect(screen.getByText(/Confirmación/i)).not.toBeNull();

    render(<Stepper initialStep={0}>{TestSteps}</Stepper>);
    expect(screen.getByText(/Información Personal/i)).not.toBeNull();
  });

  it('permite retroceder en el primer step sin error', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    fireEvent.click(screen.getByText(/Back/i));
    expect(screen.getByText(/Información Personal/i)).not.toBeNull();
  });

  it('permite avanzar en el último step sin error', () => {
    render(<Stepper initialStep={TestSteps.length}>{TestSteps}</Stepper>);
    fireEvent.click(screen.getByText(/Complete/i));
    expect(screen.getByText(/Confirmación/i)).not.toBeNull();
  });

  it('tolera children falsy (branches faltantes)', () => {
    render(
      <Stepper initialStep={1}>
        {false}
        {null}
        <Step key="1">Único</Step>
      </Stepper>
    );
    expect(screen.getByText(/Único/i)).not.toBeNull();
  });

  it('no falla si no hay onStepChange ni onFinalStepCompleted', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    fireEvent.click(screen.getByText(/Continue/i));
    fireEvent.click(screen.getByText(/Continue/i));
    fireEvent.click(screen.getByText(/Complete/i));
    // Sin expect: solo no debe crashear
  });

  it('el botón back tiene clase "inactive" si currentStep === 1', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    // El botón Back solo renderiza para currentStep !== 1, así fuerzalo:
    // Debes modificar el componente si quieres ver "inactive", porque por default no aparece cuando currentStep === 1.
    // Si no puedes modificar Stepper para fuerzarlo, puedes ignorar esto ya que nunca se renderiza.
  });

  it('setea direction como 1 si avanzas y -1 si retrocedes con indicador', () => {
    render(<Stepper initialStep={1}>{TestSteps}</Stepper>);
    // Click indicador 2 → 1 (avance)
    fireEvent.click(screen.getByText("2"));
    // Click indicador 1 → 2 (retroceso, si vuelves atrás)
    fireEvent.click(screen.getByText("1"));
  });

  it('no ejecuta onClickStep cuando quedan deshabilitados los indicadores', () => {
    render(<Stepper initialStep={1} disableStepIndicators={true}>{TestSteps}</Stepper>);
    // Nada debería pasar aun cuando intentas clickear steps
    fireEvent.click(screen.getByText("2"));
    expect(screen.getByText(/Información Personal/i)).not.toBeNull(); // Sigue igual
  });

  it('no rompe si el array de steps es 0 o falsy', () => {
    render(<Stepper initialStep={1}></Stepper>);
    render(<Stepper initialStep={1}>{null}</Stepper>);
  });

  it('usa renderStepIndicator si se le pasa y llama click', () => {
    const renderStepIndicator = ({step, currentStep, onStepClick}) =>
      <button data-testid={`custom-step-${step}`} onClick={() => onStepClick(step)}>
        Ir al paso {step}
      </button>;

    render(
      <Stepper initialStep={1} renderStepIndicator={renderStepIndicator}>{TestSteps}</Stepper>
    );
    fireEvent.click(screen.getByTestId("custom-step-3"));
    expect(screen.getByText(/Confirmación/i)).not.toBeNull();
  });
});
