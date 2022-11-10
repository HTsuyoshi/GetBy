import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelQuandoVcEstava from './LabelQuandoVcEstava';

describe('<LabelQuandoVcEstava />', () => {
  test('it should mount', () => {
    render(<LabelQuandoVcEstava />);
    
    const labelQuandoVcEstava = screen.getByTestId('LabelQuandoVcEstava');

    expect(labelQuandoVcEstava).toBeInTheDocument();
  });
});