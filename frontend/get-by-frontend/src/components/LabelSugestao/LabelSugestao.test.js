import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelSugestao from './LabelSugestao';

describe('<LabelSugestao />', () => {
  test('it should mount', () => {
    render(<LabelSugestao />);
    
    const labelSugestao = screen.getByTestId('LabelSugestao');

    expect(labelSugestao).toBeInTheDocument();
  });
});