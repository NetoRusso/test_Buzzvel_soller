import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Section02 from '../';


jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Section02 />);
  expect(screen.getByText('Join other Sun harvesters')).toBeInTheDocument();
  expect(screen.getByText('Make something awesome')).toBeInTheDocument();
  expect(screen.getByText('Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.')).toBeInTheDocument();
});