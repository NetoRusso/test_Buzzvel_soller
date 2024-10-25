
import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../../Banner";

test('renders Banner component', () => {
  render(<Banner />);
  expect(screen.getByText('Get the Sun to Power Your Home')).toBeInTheDocument();
});