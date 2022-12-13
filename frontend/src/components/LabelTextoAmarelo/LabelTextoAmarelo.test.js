import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelTextoAmarelo from './LabelTextoAmarelo';

describe('<LabelTextoAmarelo />', () => {
  test('it should mount', () => {
    render(<LabelTextoAmarelo />);
    
    const labelTextoAmarelo = screen.getByTestId('LabelTextoAmarelo');

    expect(labelTextoAmarelo).toBeInTheDocument();
  });
});