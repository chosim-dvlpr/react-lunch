import * as S from './RestaurantDetail.styled';
import { Restaurant } from '../../types/restaurant';

interface RestaurantDetailProps {
  onCloseModal: () => void;
  restaurant: Restaurant;
}

function RestaurantDetail({ onCloseModal, restaurant }: RestaurantDetailProps) {
  return (
    <S.Container>
      <S.RestaurantCategory>
        <S.CategoryIcon
          src={`src/assets/category-${restaurant.category}.png`}
          alt={restaurant.category}
        />
      </S.RestaurantCategory>
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
        <S.Button onClick={onCloseModal} $color="default">
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
