import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page'; 

// Mockando os componentes para renderizarem texto de exemplo
jest.mock('../../components/Banner', () => {
  return {
    __esModule: true,
    default: () => <div>Banner</div>,
  };
});

jest.mock('../../components/Footer', () => {
  return {
    __esModule: true,
    default: () => <div>Footer</div>,
  };
});

jest.mock('../../components/Menu', () => {
  return {
    __esModule: true,
    default: () => <div>Menu</div>,
  };
});

jest.mock('../../components/Section01', () => {
  return {
    __esModule: true,
    default: () => <div>Section01</div>,
  };
});

jest.mock('../../components/Section02', () => {
  return {
    __esModule: true,
    default: () => <div>Section02</div>,
  };
});

jest.mock('../../components/Section03', () => {
  return {
    __esModule: true,
    default: () => <div>Section03</div>,
  };
});

jest.mock('../../components/Section04', () => {
  return {
    __esModule: true,
    default: () => <div>Section04</div>,
  };
});

jest.mock('../../components/Section05', () => {
  return {
    __esModule: true,
    default: () => <div>Section05</div>,
  };
});


describe('Home', () => {
  it('renders the header with Menu and Banner components', () => {
    render(<Home />);

    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/banner/i)).toBeInTheDocument();
  });

  it('renders the main sections', () => {
    render(<Home />);

    expect(screen.getByText(/Section01/i)).toBeInTheDocument();
    expect(screen.getByText(/Section02/i)).toBeInTheDocument();
    expect(screen.getByText(/Section03/i)).toBeInTheDocument();
    expect(screen.getByText(/Section04/i)).toBeInTheDocument();
    expect(screen.getByText(/Section05/i)).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<Home />);

    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
});