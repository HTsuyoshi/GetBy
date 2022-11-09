import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaAjudar from './PaginaAjudar';

describe('<PaginaAjudar />', () => {
  test('it should mount', () => {
    render(<PaginaAjudar />);
    
    const paginaAjudar = screen.getByTestId('PaginaAjudar');

    expect(paginaAjudar).toBeInTheDocument();
  });
});