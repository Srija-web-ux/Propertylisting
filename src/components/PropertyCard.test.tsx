import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import { Property } from '../models/Property';

const mockProperty: Property = {
  id: 1,
  image: 'image1.jpg',
  bedrooms: 3,
  address: '123 Main St, Anytown, AN 12345',
  price: 250000,
  status: 'active',
};

test('renders property card with correct information', () => {
  const { getByText, getByAltText } = render(<PropertyCard property={mockProperty} onExpire={() => {}} />);
  
  expect(getByText('123 Main St, Anytown, AN 12345')).toBeInTheDocument();
  expect(getByText('3 bedrooms')).toBeInTheDocument();
  expect(getByText('250,000')).toBeInTheDocument();
  expect(getByAltText('Property')).toBeInTheDocument();
  expect(getByText('Status: active')).toBeInTheDocument();
});

test('calls onExpire when "Mark as Expired" button is clicked', () => {
  const onExpire = jest.fn();
  const { getByText } = render(<PropertyCard property={mockProperty} onExpire={onExpire} />);
  
  fireEvent.click(getByText('Mark as Expired'));
  expect(onExpire).toHaveBeenCalledWith(1);
});
