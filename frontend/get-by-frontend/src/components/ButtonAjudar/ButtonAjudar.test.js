import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonAjudar from './ButtonAjudar';

describe('<ButtonAjudar />', () => {
  test('it should mount', () => {
    render(<ButtonAjudar />);
    
    const buttonAjudar = screen.getByTestId('ButtonAjudar');

    expect(buttonAjudar).toBeInTheDocument();
  });
});