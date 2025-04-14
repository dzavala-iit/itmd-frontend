// src/__tests__/example.test.js
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText(/learn react/i)).toBeInTheDocument();
});