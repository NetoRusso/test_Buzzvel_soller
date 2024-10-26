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
  expect(screen.getByText('Services')).toBeInTheDocument();
  expect(screen.getByText('Personalized services')).toBeInTheDocument();
  expect(screen.getByText('Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.')).toBeInTheDocument();
  expect(screen.getByText('Et mauris')).toBeInTheDocument();
  expect(screen.getByText('Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.')).toBeInTheDocument();
  expect(screen.getByText('Eget sit')).toBeInTheDocument();
  expect(screen.getByText('Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.')).toBeInTheDocument();
  expect(screen.getByText('Imperdiet pellentesque')).toBeInTheDocument();
  expect(screen.getByText('Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.')).toBeInTheDocument();
  expect(screen.getByText('Non libero')).toBeInTheDocument();
  expect(screen.getByText('Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.')).toBeInTheDocument();
});