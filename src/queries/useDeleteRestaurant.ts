import { useMutation } from '@tanstack/react-query';
import { deleteRestaurant } from '../api/restaurant';
import { queryClient } from '../main';

interface DeleteRestaurantVariables {
  id: string;
  onCloseModal: () => void;
}

const useDeleteRestaurant = () => {
  const { mutate } = useMutation({
    mutationFn: ({ id }: DeleteRestaurantVariables) => deleteRestaurant({ id }),
    onSuccess: (_, { onCloseModal }) => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
      onCloseModal();
    },
  });

  return { deleteRestaurant: mutate };
};

export default useDeleteRestaurant;
