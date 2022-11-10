import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelExperiencia from './LabelExperiencia';

describe('<LabelExperiencia />', () => {
  test('it should mount', () => {
    render(<LabelExperiencia />);
    
    const labelExperiencia = screen.getByTestId('LabelExperiencia');

    expect(labelExperiencia).toBeInTheDocument();
  });
});