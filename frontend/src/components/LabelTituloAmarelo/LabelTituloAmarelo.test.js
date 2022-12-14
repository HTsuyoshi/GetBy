import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelTituloAmarelo from './LabelTituloAmarelo';

describe('<LabelTituloAmarelo />', () => {
  test('it should mount', () => {
    render(<LabelTituloAmarelo />);
    
    const labelTituloAmarelo = screen.getByTestId('LabelTituloAmarelo');

    expect(labelTituloAmarelo).toBeInTheDocument();
  });