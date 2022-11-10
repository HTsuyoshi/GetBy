import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconLogInOut from './IconLogInOut';

describe('<IconLogInOut />', () => {
  test('it should mount', () => {
    render(<IconLogInOut />);
    
    const iconLogInOut = screen.getByTestId('IconLogInOut');

    expect(iconLogInOut).toBeInTheDocument();
  });
});