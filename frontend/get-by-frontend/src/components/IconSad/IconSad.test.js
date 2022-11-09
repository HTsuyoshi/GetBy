import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconSad from './IconSad';

describe('<IconSad />', () => {
  test('it should mount', () => {
    render(<IconSad />);
    
    const iconSad = screen.getByTestId('IconSad');

    expect(iconSad).toBeInTheDocument();
  });
});