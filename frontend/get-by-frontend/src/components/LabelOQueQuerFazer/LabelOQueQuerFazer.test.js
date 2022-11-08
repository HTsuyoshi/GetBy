import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LabelOQueQuerFazer from './LabelOQueQuerFazer';

describe('<LabelOQueQuerFazer />', () => {
  test('it should mount', () => {
    render(<LabelOQueQuerFazer />);
    
    const labelOQueQuerFazer = screen.getByTestId('LabelOQueQuerFazer');

    expect(labelOQueQuerFazer).toBeInTheDocument();
  });
});