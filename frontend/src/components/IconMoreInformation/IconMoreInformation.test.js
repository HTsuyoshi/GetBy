import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconMoreInformation from './IconMoreInformation';

describe('<IconMoreInformation />', () => {
  test('it should mount', () => {
    render(<IconMoreInformation />);
    
    const iconMoreInformation = screen.getByTestId('IconMoreInformation');

    expect(iconMoreInformation).toBeInTheDocument();
  });
});