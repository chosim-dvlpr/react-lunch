import { http, HttpResponse } from 'msw';
import { API_URL } from '../api/restaurant';
import mockRestaurants from './restaurants.json';

export const handlers = [
  http.get(`${API_URL}/restaurants`, () => {
    return HttpResponse.json(mockRestaurants);
  }),
];
