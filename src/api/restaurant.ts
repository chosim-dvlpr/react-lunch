import axios from 'axios';

export const API_URL = 'https://example.com';

export const getRestaurants = async () => {
  const { data } = await axios(`${API_URL}/restaurants`);
  return data;
};
