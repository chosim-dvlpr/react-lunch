import axios from 'axios';
import { RestaurantCategory } from '../types/restaurant';

export const API_URL = 'https://example.com';

interface GetRestaurantsResponse {
  category: RestaurantCategory;
  description: string;
  id: string;
  name: string;
}

export const getRestaurants = async (): Promise<GetRestaurantsResponse[]> => {
  const { data } = await axios(`${API_URL}/restaurants`);
  return data;
};
