import { useQuery } from '@tanstack/react-query';
import { getRestaurants } from '../api/restaurant';
import { RestaurantCategory, Sorting } from '../types/restaurant';

const useRestaurants = (
  selectedCategory: RestaurantCategory,
  selectedSorting: Sorting
) => {
  const { data } = useQuery({
    queryFn: () => getRestaurants({ selectedCategory, selectedSorting }),
    queryKey: ['restaurants', selectedCategory, selectedSorting],
  });

  return { restaurantList: data ?? [] };
};

export default useRestaurants;
