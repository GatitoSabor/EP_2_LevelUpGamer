import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App Component', () => {
  beforeEach(() => {
    // Setup antes de cada test
    document.body.innerHTML = '';
  });

  it('should render without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it('should contain main navigation', () => {
    render(<App />);
    const nav = document.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should render main content area', () => {
    render(<App />);
    const main = document.querySelector('main');
    expect(main).toBeTruthy();
  });

  it('should render footer', () => {
    render(<App />);
    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});