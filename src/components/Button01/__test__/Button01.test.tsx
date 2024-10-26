import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Button01 from '../index';

test('renders Banner component', () => {
  render(<Button01 />);
  expect(screen.getByText('Request a Quote')).toBeInTheDocument();
});