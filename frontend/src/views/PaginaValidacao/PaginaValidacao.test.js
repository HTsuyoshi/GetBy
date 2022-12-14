import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaValidacao from './PaginaValidacao';

describe('<PaginaValidacao />', () => {
  test('it should mount', () => {
    render(<PaginaValidacao />);
    
    const paginaValidacao = screen.getByTestId('PaginaValidacao');

    expect(paginaValidacao).toBeInTheDocument();
  });
});