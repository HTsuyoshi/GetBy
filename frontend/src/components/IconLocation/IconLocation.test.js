import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconLocation from './IconLocation';

describe('<IconLocation />', () => {
  test('it should mount', () => {
    render(<IconLocation />);
    
    const iconLocation = screen.getByTestId('IconLocation');

    expect(iconLocation).toBeInTheDocument();
  });
});