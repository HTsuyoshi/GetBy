import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaMapa from './PaginaMapa';

describe('<PaginaMapa />', () => {
  test('it should mount', () => {
    render(<PaginaMapa />);
    
    const paginaMapa = screen.getByTestId('PaginaMapa');

    expect(paginaMapa).toBeInTheDocument();
  });
});