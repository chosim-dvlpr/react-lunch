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

export const postRestaurant = async ({
  category,
  name,
  distance,
  description,
  link,
  isLiked,
}: Omit<Restaurant, 'id'>) => {
  await axios.post(`${API_URL}/restaurant`, {
    category,
    name,
    distance,
    description,
    link,
    isLiked,
  });
};

export const deleteRestaurant = async ({ id }: { id: string }) => {
  await axios.delete(`${API_URL}/restaurant/${id}`);
};

export const updateLikedRestaurant = async ({ id }: { id: string }) => {
  await axios.post(`${API_URL}/restaurant/${id}`);
};
