import useUpdateLiked from '../../../../queries/useUpdateLiked';
import { Restaurant } from '../../../../types/restaurant';
import * as S from '../Restaurant.styled';

interface RestaurantItemProps {
  restaurant: Restaurant;
  onSelectedRestaurant: (restaurant: Restaurant) => void;
}

function RestaurantItem({
  restaurant,
  onSelectedRestaurant,
}: RestaurantItemProps) {
  const { updateLikedRestaurant } = useUpdateLiked();

  const handleLikedButtonClick = (
    event: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    event.stopPropagation();
    updateLikedRestaurant({ id });
  };

  return (
    <S.Restaurant onClick={() => onSelectedRestaurant(restaurant)}>
      <S.RestaurantCategory>
        <S.CategoryIcon
          src={`assets/category-${restaurant.category}.png`}
          alt={restaurant.category}
        />
      </S.RestaurantCategory>
      <S.RestaurantInfo>
        <S.ListHeaderBox>
          <S.InfoHeaderBox>
            <S.RestaurantName>{restaurant.name}</S.RestaurantName>
            <S.RestaurantDistance>
              캠퍼스로부터 {restaurant.distance}분 내
            </S.RestaurantDistance>
          </S.InfoHeaderBox>
          <S.LikedIcon
            src={`assets/${
              restaurant.isLiked
                ? 'liked-icon-filled.png'
                : 'liked-icon-lined.png'
            }`}
            onClick={(event) => handleLikedButtonClick(event, restaurant.id)}
          />
        </S.ListHeaderBox>
        <S.RestaurantDescription>
          {restaurant.description}
        </S.RestaurantDescription>
      </S.RestaurantInfo>
    </S.Restaurant>
  );
}

export default RestaurantItem;
