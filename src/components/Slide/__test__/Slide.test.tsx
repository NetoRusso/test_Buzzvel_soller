import '@testing-library/jest-dom'; 
import { render } from "@testing-library/react";
import Slide from '../';
import data from '../../../data/coments.json';
import { ReactNode } from 'react';

interface MockSwiperProps {
  children?: ReactNode;
}

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: MockSwiperProps) => children,
  SwiperSlide: ({ children }: MockSwiperProps) => children,
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));

jest.mock('swiper/css', () => jest.fn());

jest.mock('swiper/css/navigation', () => jest.fn());

test('renders Banner component', () => {
  render(<Slide data={data}/>);
});