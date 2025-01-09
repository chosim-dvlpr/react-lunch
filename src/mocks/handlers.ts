import { http, HttpResponse } from 'msw';
import { API_URL } from '../api/restaurant';
import mockRestaurants from './restaurants.json';

export const handlers = [
  http.get(`${API_URL}/restaurants`, ({ request }) => {
    const url = new URL(request.url);
    const params = url.search.split('=')[1];
    console.log(params);
    if (params) {
      const newRestaurants = [...mockRestaurants];
      const filteredData = newRestaurants.filter(
        (data) => data.category === params
      );
      return HttpResponse.json(filteredData);
    }
    return HttpResponse.json(mockRestaurants);
  }),
];
