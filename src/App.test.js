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

test('button should be enabled and checkbox should be unchecked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()
  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked();
})

test('should change button status based on checkbox', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox')
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // should disable button when checkbox is checked
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // should enable button when checkbox is not checked
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled()
  expect(checkBox).not.toBeChecked();
})