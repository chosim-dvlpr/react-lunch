import axios from 'axios';
import { Restaurant, RestaurantCategory, Sorting } from '../types/restaurant';

export const API_URL = 'https://example.com';

interface GetRestaurantsRequest {
  selectedCategory?: RestaurantCategory;
  selectedSorting: Sorting;
}

export const getRestaurants = async ({
  selectedCategory,
  selectedSorting,
}: GetRestaurantsRequest): Promise<Restaurant[]> => {
  const params = new URLSearchParams();

  if (selectedCategory && selectedCategory !== 'all') {
    params.append('category', selectedCategory);
  }

  params.append('sort', selectedSorting);

  const url = `${API_URL}/restaurants?${params.toString()}`;
  const { data } = await axios.get<Restaurant[]>(url);
  return data;
};
