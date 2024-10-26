import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Section05 from '../';


jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Section05 />);
  expect(screen.getByText('Get the Sun to power your home')).toBeInTheDocument();
  expect(screen.getByText('All the power that you need for your house is now available')).toBeInTheDocument();
  expect(screen.getByText('Egestas fringilla aliquam leo')).toBeInTheDocument();
});