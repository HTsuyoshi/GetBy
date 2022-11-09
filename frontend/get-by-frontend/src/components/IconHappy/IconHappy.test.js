import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconHappy from './IconHappy';

describe('<IconHappy />', () => {
  test('it should mount', () => {
    render(<IconHappy />);
    
    const iconHappy = screen.getByTestId('IconHappy');

    expect(iconHappy).toBeInTheDocument();
  });
});