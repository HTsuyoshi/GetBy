import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonRoxo from './ButtonRoxo';

describe('<ButtonRoxo />', () => {
  test('it should mount', () => {
    render(<ButtonRoxo />);
    
    const buttonRoxo = screen.getByTestId('ButtonRoxo');

    expect(buttonRoxo).toBeInTheDocument();
  });
});