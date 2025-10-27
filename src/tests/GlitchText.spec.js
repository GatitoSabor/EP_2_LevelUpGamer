import React from 'react';
import { render } from '@testing-library/react';
import GlitchText from '../components/ui/GlitchText';

describe('GlitchText', () => {
  it('renderiza el texto correctamente', () => {
    const { getByText } = render(<GlitchText>Glitch Example</GlitchText>);
    expect(getByText('Glitch Example')).not.toBeNull();
  });

  it('permite cambios de props/children', () => {
    const { getByText, rerender } = render(<GlitchText>Uno</GlitchText>);
    expect(getByText('Uno')).not.toBeNull();
    rerender(<GlitchText>Dos</GlitchText>);
    expect(getByText('Dos')).not.toBeNull();
  });

});
