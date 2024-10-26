import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from '../';


jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Menu />);
  expect(screen.getByText('soller')).toBeInTheDocument();
  expect(screen.getByText('Products')).toBeInTheDocument();
  expect(screen.getByText('Solutions')).toBeInTheDocument();
  expect(screen.getByText('Services')).toBeInTheDocument();
  expect(screen.getByText('Configure')).toBeInTheDocument();
  expect(screen.getByText('555 818 282')).toBeInTheDocument();
});