import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
// import Grid from "./components/Grid";
// import Card from "./components/Card";
import '@testing-library/jest-dom/extend-expect'

test('renders without crashing', () => {
  render(<App />);
  
});

test('renders header', () => {

  //arrange
  const { getByText } = render(<App />);

  const header = getByText(/Women's World Cup/i); 
  
  //act - not needed

  // assert
  expect(header).toBeVisible();
});




