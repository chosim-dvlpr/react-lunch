import { http, HttpResponse } from 'msw';
import { API_URL } from '../api/restaurant';
import mockRestaurants from './restaurants.json';

export const handlers = [
  http.get(`${API_URL}/restaurants`, ({ request }) => {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);

    const selectedCategory = params.get('category');
    const selectedSorting = params.get('sort');

    let filteredData = [...mockRestaurants];

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (data) => data.category === selectedCategory
      );
    }

    if (selectedSorting) {
      filteredData.sort((a, b) => {
        if (selectedSorting === 'nameAsc') {
          return a.name.localeCompare(b.name);
        } else {
          return a.distance - b.distance;
        }
      });
    }

    return HttpResponse.json(filteredData);
  }),
];
