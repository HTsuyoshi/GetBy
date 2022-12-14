import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaLogin from './PaginaLogin';

describe('<PaginaLogin />', () => {
  test('it should mount', () => {
    render(<PaginaLogin />);
    
    const paginaLogin = screen.getByTestId('PaginaLogin');

    expect(paginaLogin).toBeInTheDocument();
  });
});