import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonAmarelo from './ButtonAmarelo';

describe('<ButtonAmarelo />', () => {
  test('it should mount', () => {
    render(<ButtonAmarelo />);
    
    const buttonAmarelo = screen.getByTestId('ButtonAmarelo');

    expect(buttonAmarelo).toBeInTheDocument();
  });
});