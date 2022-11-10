import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DivEmocao from './DivEmocao';

describe('<DivEmocao />', () => {
  test('it should mount', () => {
    render(<DivEmocao />);
    
    const divEmocao = screen.getByTestId('DivEmocao');

    expect(divEmocao).toBeInTheDocument();
  });
});