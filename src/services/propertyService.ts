import axios from 'axios';
import { Property } from '../models/Property';

const API_URL = 'http://localhost:5000/properties';

export const getProperties = async (): Promise<Property[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updatePropertyStatus = async (id: number, status: 'active' | 'expired'): Promise<Property> => {
  const response = await axios.patch(`${API_URL}/${id}`, { status });
  return response.data;
};
