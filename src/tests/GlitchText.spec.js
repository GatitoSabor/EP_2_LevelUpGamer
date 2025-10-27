import React from 'react';
import { render } from '@testing-library/react';
import GlitchText from '../components/ui/GlitchText';

describe('GlitchText', () => {
  it('renderiza el texto correctamente', () => {
    const { getByText } = render(<GlitchText>Glitch Example</GlitchText>);
    expect(getByText('Glitch Example')).toBeInTheDocument();
  });

  it('permite cambios de props/children', () => {
    const { getByText, rerender } = render(<GlitchText>Uno</GlitchText>);
    expect(getByText('Uno')).toBeInTheDocument();
    rerender(<GlitchText>Dos</GlitchText>);
    expect(getByText('Dos')).toBeInTheDocument();
  });

  it('coincide con snapshot', () => {
    const { container } = render(<GlitchText>Snap</GlitchText>);
    expect(container).toMatchSnapshot();
  });
});
