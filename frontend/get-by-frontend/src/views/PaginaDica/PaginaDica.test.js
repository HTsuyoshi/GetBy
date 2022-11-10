import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaDica from './PaginaDica';

describe('<PaginaDica />', () => {
  test('it should mount', () => {
    render(<PaginaDica />);
    
    const paginaDica = screen.getByTestId('PaginaDica');

    expect(paginaDica).toBeInTheDocument();
  });
});