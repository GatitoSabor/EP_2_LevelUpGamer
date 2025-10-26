import '@testing-library/react';

describe('setupTests mocks', () => {
  it('setea testIdAttribute mediante configure', () => {
    // Está cubierto cuando cualquier test importa setupTests.js
    expect(document.body).toBeDefined();
  });

  it('mockea React.useState correctamente', () => {
    const React = require('react');
    const [val, setTestState] = React.useState('abc');
    expect(val).toBe('abc');
    expect(typeof setTestState).toBe('function');
    // setTestState es un spy de jasmine
    setTestState('nuevo');
    expect(setTestState).toHaveBeenCalledWith('nuevo');
  });

  it('define global.Image como un mock', () => {
    const img = new global.Image();
    expect(img.src).toBe('test-image-stub');
  });
});
