import axios from 'axios';
import { Restaurant, RestaurantCategory } from '../types/restaurant';

export const API_URL = 'https://example.com';

export const getRestaurants = async (
  selectedCategory?: RestaurantCategory
): Promise<Restaurant[]> => {
  const url =
    selectedCategory !== 'all'
      ? `${API_URL}/restaurants?category=${selectedCategory}`
      : `${API_URL}/restaurants`;

  const { data } = await axios.get<Restaurant[]>(url);
  return data;
};
