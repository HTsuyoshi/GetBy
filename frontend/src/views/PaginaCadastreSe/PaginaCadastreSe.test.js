import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaCadastreSe from './PaginaCadastreSe';

describe('<PaginaCadastreSe />', () => {
  test('it should mount', () => {
    render(<PaginaCadastreSe />);
    
    const paginaCadastreSe = screen.getByTestId('PaginaCadastreSe');

    expect(paginaCadastreSe).toBeInTheDocument();
  });
});