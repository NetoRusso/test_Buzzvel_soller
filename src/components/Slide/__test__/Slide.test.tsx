import '@testing-library/jest-dom'; 
import { render } from "@testing-library/react";
import Slide from '../';
import data from '../../../data/coments.json';
// import { Swiper as OriginalSwiper, SwiperSlide as OriginalSwiperSlide } from 'swiper/react';
// import React, { forwardRef } from 'react';





// jest.mock('next/image', () => {
//   const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
//     // eslint-disable-next-line @next/next/no-img-element
//     return <img {...props} alt={alt} />;
//   };
//   MockImage.displayName = 'MockImage'; 
//   return MockImage;
// });


// jest.mock('swiper/react', () => ({
//   Swiper: forwardRef(({ children, ...props }: React.ComponentProps<typeof OriginalSwiper>, ref) => (
//     <div ref={ref} {...props}>
//       {typeof children === 'function' ? children({}) : children}
//     </div>
//   )),

//   SwiperSlide: ({ children, ...props }: React.ComponentProps<typeof OriginalSwiper>) => (
//     <div {...props}>
//       {typeof children === 'function' ? children({}) : children}
//     </div>
//   ),
// }));

test('renders Banner component', () => {
  render(<Slide data={data}/>);
});