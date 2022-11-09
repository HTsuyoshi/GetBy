import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonReceberAjuda from './ButtonReceberAjuda';

describe('<ButtonReceberAjuda />', () => {
  test('it should mount', () => {
    render(<ButtonReceberAjuda />);
    
    const buttonReceberAjuda = screen.getByTestId('ButtonReceberAjuda');

    expect(buttonReceberAjuda).toBeInTheDocument();
  });
});