import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App Component', function() {
  beforeEach(function() {
    // Setup antes de cada test
    document.body.innerHTML = '';
  });

  it('should render without crashing', function() {
    var container = render(<App />).container;
    expect(container).toBeTruthy();
  });

  it('should contain main navigation', function() {
    render(<App />);
    var nav = document.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should render main content area', function() {
    render(<App />);
    var main = document.querySelector('main');
    expect(main).toBeTruthy();
  });

  it('should render footer', function() {
    render(<App />);
    var footer = document.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});
