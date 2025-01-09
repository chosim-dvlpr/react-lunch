import { useQuery } from '@tanstack/react-query';
import { getRestaurants } from '../api/restaurant';

const useRestaurants = () => {
  const { data } = useQuery({
    queryFn: getRestaurants,
    queryKey: ['restaurants'],
  });

  return { restaurantList: data };
};

export default useRestaurants;
