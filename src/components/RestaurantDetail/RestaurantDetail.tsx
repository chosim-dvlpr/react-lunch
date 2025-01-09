import * as S from './RestaurantDetail.styled';
import { Restaurant } from '../../types/restaurant';
import useDeleteRestaurant from '../../queries/useDeleteRestaurant';
import useUpdateLiked from '../../queries/useUpdateLiked';
import { useReducer } from 'react';

interface RestaurantDetailProps {
  onCloseModal: () => void;
  restaurant: Restaurant;
}

function RestaurantDetail({ onCloseModal, restaurant }: RestaurantDetailProps) {
  const { deleteRestaurant } = useDeleteRestaurant();
  const { updateLikedRestaurant } = useUpdateLiked();
  const [isLiked, toggleLiked] = useReducer(
    (prev) => !prev,
    restaurant.isLiked
  );

  const handleDeleteRestaurant = () => {
    deleteRestaurant({ id: restaurant.id, onCloseModal });
  };

  const handleLikedButtonClick = (
    event: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    event.preventDefault();
    toggleLiked();
    updateLikedRestaurant({ id });
  };
  console.log(restaurant.isLiked);

  return (
    <S.Container>
      <S.HeaderBox>
        <S.RestaurantCategory>
          <S.CategoryIcon
            src={`assets/category-${restaurant.category}.png`}
            alt={restaurant.category}
          />
        </S.RestaurantCategory>
        <S.LikedIcon
          src={`assets/${
            isLiked ? 'favorite-icon-filled.png' : 'favorite-icon-lined.png'
          }`}
          onClick={(event) => handleLikedButtonClick(event, restaurant.id)}
        />
      </S.HeaderBox>
      <S.RestaurantName>{restaurant.name}</S.RestaurantName>
      <S.RestaurantDistance>
        캠퍼스로부터 {restaurant.distance}분 내
      </S.RestaurantDistance>
      <S.RestaurantInfo>
        <S.RestaurantDescription>
          {restaurant.description}
        </S.RestaurantDescription>
      </S.RestaurantInfo>
      <S.RestaurantLink>{restaurant.link}</S.RestaurantLink>

      <S.ButtonContainer>
        <S.Button onClick={handleDeleteRestaurant} $color="default">
          삭제하기
        </S.Button>
        <S.Button $color="primary" onClick={onCloseModal}>
          닫기
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default RestaurantDetail;
