import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from '../index';

jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Banner />);
  expect(screen.getByText('Get the Sun to Power Your Home')).toBeInTheDocument();
  expect(screen.getByText('Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.')).toBeInTheDocument();
  expect(screen.getByText('“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”')).toBeInTheDocument();
  expect(screen.getByText('Rwanda Melflor')).toBeInTheDocument();
  expect(screen.getByText('zerowaste.com')).toBeInTheDocument();
});