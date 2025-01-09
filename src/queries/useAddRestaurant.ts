import { useMutation } from '@tanstack/react-query';
import { postRestaurant } from '../api/restaurant';
import { queryClient } from '../main';
import { AddRestaurantData } from '../components/AddRestaurantModal/AddRestaurantModal.type';

const useAddRestaurant = (onCloseModal: () => void) => {
  const { mutate } = useMutation({
    mutationFn: ({
      category,
      name,
      distance,
      description,
      link,
    }: AddRestaurantData) =>
      postRestaurant({
        category,
        name,
        distance,
        description,
        link,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['restaurants'],
      });
      onCloseModal();
    },
  });

  return { mutate };
};

export default useAddRestaurant;
