import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputDica from './InputDica';

describe('<InputDica />', () => {
  test('it should mount', () => {
    render(<InputDica />);
    
    const inputDica = screen.getByTestId('InputDica');

    expect(inputDica).toBeInTheDocument();
  });
});