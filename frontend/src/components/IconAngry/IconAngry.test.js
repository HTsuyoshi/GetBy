import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconAngry from './IconAngry';

describe('<IconAngry />', () => {
  test('it should mount', () => {
    render(<IconAngry />);
    
    const iconAngry = screen.getByTestId('IconAngry');

    expect(iconAngry).toBeInTheDocument();
  });
});