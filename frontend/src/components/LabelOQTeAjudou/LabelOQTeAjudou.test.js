import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelOqTeAjudou from './LabelOqTeAjudou';

describe('<LabelOqTeAjudou />', () => {
  test('it should mount', () => {
    render(<LabelOqTeAjudou />);
    
    const labelOqTeAjudou = screen.getByTestId('LabelOqTeAjudou');

    expect(labelOqTeAjudou).toBeInTheDocument();
  });
});