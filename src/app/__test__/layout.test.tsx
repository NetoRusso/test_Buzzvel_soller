import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from "../layout";

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
  return MockImage;
});
  

describe('RootLayout', () => {
  it('renders children correcty', () => {
    render(
    <RootLayout>
      <h1>Hello World</h1>
    </RootLayout>
  );

   expect(screen.getByText('Hello World')).toBeInTheDocument();
  })

  it('has the correct language attribute', () => {
    const { container } = render(
      <RootLayout>
        <h1>Hello World</h1>
      </RootLayout>
    );

    // Verifica se o atributo "lang" do elemento <html> é "en"
    expect(container.querySelector('html')).toHaveAttribute('lang', 'en');
  });
})