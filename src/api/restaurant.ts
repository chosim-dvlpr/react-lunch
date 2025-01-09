import axios from 'axios';
import { Restaurant, RestaurantCategory, Sorting } from '../types/restaurant';
import { AddRestaurantData } from '../components/AddRestaurantModal/AddRestaurantModal.type';

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
}: AddRestaurantData) => {
  await axios.post(`${API_URL}/restaurant`, {
    category,
    name,
    distance,
    description,
    link,
  });
};
