import { http, HttpResponse } from 'msw';
import { API_URL } from '../api/restaurant';
import mockRestaurants from './restaurants.json';
import { AddRestaurantData } from '../components/AddRestaurantModal/AddRestaurantModal.type';

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

  http.post(`${API_URL}/restaurant`, async ({ request }) => {
    const requestBody = (await request.json()) as AddRestaurantData;

    const newData: AddRestaurantData & { id: string } = {
      ...requestBody,
      id: (mockRestaurants.length + 1).toString(),
      distance: Number(requestBody.distance),
      description: requestBody.description ?? '',
      link: requestBody.link ?? '',
    };

    mockRestaurants.push(newData);

    return HttpResponse.json(mockRestaurants);
  }),
];
