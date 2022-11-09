import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelEmocoes from './LabelEmocoes';

describe('<LabelEmocoes />', () => {
  test('it should mount', () => {
    render(<LabelEmocoes />);
    
    const labelEmocoes = screen.getByTestId('LabelEmocoes');

    expect(labelEmocoes).toBeInTheDocument();
  });
});