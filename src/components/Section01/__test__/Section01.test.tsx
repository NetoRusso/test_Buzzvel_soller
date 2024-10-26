import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Section01 from '../';


jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Section01 />);
  expect(screen.getByText('No more waste')).toBeInTheDocument();
  expect(screen.getByText('Pick the Sun')).toBeInTheDocument();
  expect(screen.getByText('Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.')).toBeInTheDocument();
});