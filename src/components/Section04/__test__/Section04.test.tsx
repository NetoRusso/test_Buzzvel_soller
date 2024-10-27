import '@testing-library/jest-dom'; 
import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import Section02 from '../';


interface MockSwiperProps {
  children?: ReactNode;
}

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: MockSwiperProps) => children,
  SwiperSlide: ({ children }: MockSwiperProps) => children,
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null, // Removido props, pois não está sendo utilizado
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));

jest.mock('swiper/css', () => jest.fn());

jest.mock('swiper/css/navigation', () => jest.fn());

jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});

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