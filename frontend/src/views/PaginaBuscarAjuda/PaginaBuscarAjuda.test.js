import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaBuscarAjuda from './PaginaBuscarAjuda';

describe('<PaginaBuscarAjuda />', () => {
  test('it should mount', () => {
    render(<PaginaBuscarAjuda />);
    
    const paginaEmocoes = screen.getByTestId('PaginaBuscarAjuda');

    expect(paginaEmocoes).toBeInTheDocument();
  });
});