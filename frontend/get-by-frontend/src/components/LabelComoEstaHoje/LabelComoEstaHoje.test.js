import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelComoEstaHoje from './LabelComoEstaHoje';

describe('<LabelComoEstaHoje />', () => {
  test('it should mount', () => {
    render(<LabelComoEstaHoje />);
    
    const labelComoEstaHoje = screen.getByTestId('LabelComoEstaHoje');

    expect(labelComoEstaHoje).toBeInTheDocument();
  });
});