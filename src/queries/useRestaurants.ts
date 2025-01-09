import { useQuery } from '@tanstack/react-query';
import { getRestaurants } from '../api/restaurant';
import { RestaurantCategory } from '../types/restaurant';

const useRestaurants = (selectedCategory: RestaurantCategory) => {
  const { data } = useQuery({
    queryFn: () => getRestaurants(selectedCategory),
    queryKey: ['restaurants', selectedCategory],
  });

  return { restaurantList: data ?? [] };
};

export default useRestaurants;
