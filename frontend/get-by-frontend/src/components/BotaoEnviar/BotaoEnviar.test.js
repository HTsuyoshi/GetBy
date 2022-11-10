import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BotaoEnviar from './BotaoEnviar';

describe('<BotaoEnviar />', () => {
  test('it should mount', () => {
    render(<BotaoEnviar />);
    
    const botaoEnviar = screen.getByTestId('BotaoEnviar');

    expect(botaoEnviar).toBeInTheDocument();
  });
});