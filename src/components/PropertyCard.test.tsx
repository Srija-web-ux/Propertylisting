import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import { Property } from '../models/Property';

const mockProperty: Property = {
  id: 1,
  image: 'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_640.jpg',
  "bedrooms": 3,
  "address": "98 Crabtree Lane, London, HP3 9EJ",
  "price": 500000,
  "status": "active"
};

test('renders property card with correct information', () => {
  const { getByText, getByAltText } = render(<PropertyCard property={mockProperty} onExpire={() => {}} />);
  
  expect(getByText('98 Crabtree Lane, London, HP3 9EJ')).toBeInTheDocument();
  expect(getByText('3 bedrooms')).toBeInTheDocument();
  expect(getByText('500,000')).toBeInTheDocument();
  expect(getByAltText('Property')).toBeInTheDocument();
  expect(getByText('Status: active')).toBeInTheDocument();
});

test('calls onExpire when "Mark as Expired" button is clicked', () => {
  const onExpire = jest.fn();
  const { getByText } = render(<PropertyCard property={mockProperty} onExpire={onExpire} />);
  
  fireEvent.click(getByText('Mark as Expired'));
  expect(onExpire).toHaveBeenCalledWith(1);
});
