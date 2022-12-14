import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaEsqueciSenha from './PaginaEsqueciSenha';

describe('<PaginaEsqueciSenha />', () => {
  test('it should mount', () => {
    render(<PaginaEsqueciSenha />);
    
    const paginaEsqueciSenha = screen.getByTestId('PaginaEsqueciSenha');

    expect(paginaEsqueciSenha).toBeInTheDocument();
  });
});