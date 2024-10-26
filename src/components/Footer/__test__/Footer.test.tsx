import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from '../';


jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Footer />);
  expect(screen.getByText('@ 2023 Soller, Inc. All rights reserved.')).toBeInTheDocument();
  expect(screen.getByText('Terms')).toBeInTheDocument();
  expect(screen.getByText('Privacy')).toBeInTheDocument();
  expect(screen.getByText('Support')).toBeInTheDocument();
});