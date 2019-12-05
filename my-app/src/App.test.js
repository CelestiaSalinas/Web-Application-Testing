import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('strikes is rendered to the UI', () => {
  const {getAllByText} = render(<App />)

  getAllByText(/Strike/)
})

test('scoreboard is rendered', () => {
  const {getByTestId} = render(<App />)

  getByTestId(/scoreboard/i)
})