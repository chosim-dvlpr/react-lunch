import { useMutation } from '@tanstack/react-query';
import { postRestaurant } from '../api/restaurant';
import { queryClient } from '../main';
import { Restaurant } from '../types/restaurant';

const useAddRestaurant = ({
  onSuccessCallback,
}: {
  onSuccessCallback: () => void;
}) => {
  const { mutate } = useMutation({
    mutationFn: ({
      category,
      name,
      distance,
      description,
      link,
      isLiked,
    }: Omit<Restaurant, 'id'>) =>
      postRestaurant({
        category,
        name,
        distance,
        description,
        link,
        isLiked,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['restaurants'],
      });
      onSuccessCallback();
    },
  });

  return { mutate };
};

export default useAddRestaurant;
