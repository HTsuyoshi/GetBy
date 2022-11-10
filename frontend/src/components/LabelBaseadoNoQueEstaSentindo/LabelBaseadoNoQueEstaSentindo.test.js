import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelBaseadoNoQueEstaSentindo from './LabelBaseadoNoQueEstaSentindo';

describe('<LabelBaseadoNoQueEstaSentindo />', () => {
  test('it should mount', () => {
    render(<LabelBaseadoNoQueEstaSentindo />);
    
    const labelBaseadoNoQueEstaSentindo = screen.getByTestId('LabelBaseadoNoQueEstaSentindo');

    expect(labelBaseadoNoQueEstaSentindo).toBeInTheDocument();
  });
});