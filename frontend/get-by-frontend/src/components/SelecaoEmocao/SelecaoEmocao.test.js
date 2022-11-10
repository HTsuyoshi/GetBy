import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelecaoEmocao from './SelecaoEmocao';

describe('<SelecaoEmocao />', () => {
  test('it should mount', () => {
    render(<SelecaoEmocao />);
    
    const selecaoEmocao = screen.getByTestId('SelecaoEmocao');

    expect(selecaoEmocao).toBeInTheDocument();
  });
});