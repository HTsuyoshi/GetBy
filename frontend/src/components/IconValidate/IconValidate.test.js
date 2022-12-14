import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconValidate from './IconValidate';

describe('<IconValidate />', () => {
  test('it should mount', () => {
    render(<IconValidate />);
    
    const iconValidate = screen.getByTestId('IconValidate');

    expect(iconValidate).toBeInTheDocument();
  });
});