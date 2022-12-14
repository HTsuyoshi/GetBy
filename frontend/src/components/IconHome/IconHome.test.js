import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconHome from './IconHome';

describe('<IconHome />', () => {
  test('it should mount', () => {
    render(<IconHome />);
    
    const iconHome = screen.getByTestId('IconHome');

    expect(iconHome).toBeInTheDocument();
  });
});