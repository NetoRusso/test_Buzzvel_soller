import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Button02 from '../index';

test('renders Banner component', () => {
  render(<Button02 />);
  expect(screen.getByText('Request a Quote')).toBeInTheDocument();
});