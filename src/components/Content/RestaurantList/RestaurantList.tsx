import { Restaurant } from '../../../types/restaurant';
import * as S from './RestaurantList.styled';

interface RestaurantListProps {
  restaurantList: Restaurant[];
}

function RestaurantList({ restaurantList }: RestaurantListProps) {
  return (
    <S.RestaurantListContainer>
      <S.RestaurantList>
        {restaurantList &&
          restaurantList.map((restaurant) => (
            <S.Restaurant key={restaurant.id}>
              <S.RestaurantCategory>
                <S.CategoryIcon
                  src={`src/assets/category-${restaurant.category}.png`}
                  alt={restaurant.category}
                />
              </S.RestaurantCategory>
              <S.RestaurantInfo>
                <S.InfoHeaderBox>
                  <S.RestaurantName>{restaurant.name}</S.RestaurantName>
                  <S.RestaurantDistance>
                    캠퍼스로부터 {restaurant.distance}분 내
                  </S.RestaurantDistance>
                </S.InfoHeaderBox>
                <S.RestaurantDescription>
                  {restaurant.description}
                </S.RestaurantDescription>
              </S.RestaurantInfo>
            </S.Restaurant>
          ))}
      </S.RestaurantList>
    </S.RestaurantListContainer>
  );
}

export default RestaurantList;
