import '@testing-library/jest-dom'; 
import React from "react";
import { render, screen } from "@testing-library/react";
import Section03 from '../';


jest.mock('next/image', () => {
  const MockImage = ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} />;
  };
  MockImage.displayName = 'MockImage'; 
  return MockImage;
});


test('renders Banner component', () => {
  render(<Section03 />);
  expect(screen.getByText('System features')).toBeInTheDocument();
  expect(screen.getByText('Powerful features')).toBeInTheDocument();
  expect(screen.getByText('Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.')).toBeInTheDocument();
  expect(screen.getByText('Erat sit')).toBeInTheDocument();
  expect(screen.getByText('Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.')).toBeInTheDocument();
  expect(screen.getByText('Ullamcorper arcu')).toBeInTheDocument();
  expect(screen.getByText('Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.')).toBeInTheDocument();
  expect(screen.getByText('Et pellentesque')).toBeInTheDocument();
  expect(screen.getByText('Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.')).toBeInTheDocument();
  expect(screen.getByText('Amet egestas')).toBeInTheDocument();
  expect(screen.getByText('Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.')).toBeInTheDocument();
});