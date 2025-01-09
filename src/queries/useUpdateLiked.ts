import { useMutation } from '@tanstack/react-query';
import { updateLikedRestaurant } from '../api/restaurant';
import { queryClient } from '../main';

const useUpdateLiked = () => {
  const { mutate } = useMutation({
    mutationFn: ({ id }: { id: string }) => updateLikedRestaurant({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    },
  });

  return { updateLikedRestaurant: mutate };
};

export default useUpdateLiked;
