import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaAtendimento from './PaginaAtendimento';

describe('<PaginaAtendimento />', () => {
  test('it should mount', () => {
    render(<PaginaAtendimento />);
    
    const paginaAtendimento = screen.getByTestId('PaginaAtendimento');

    expect(paginaAtendimento).toBeInTheDocument();
  });
});