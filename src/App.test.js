import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button should have correct initial color and text, should update when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toHaveStyle({ "background-color": 'red' })
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": 'blue' })
  expect(colorButton).toHaveTextContent('Change to red')
});