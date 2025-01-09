import useRestaurants from '../../../queries/useRestaurants';
import { RestaurantCategory } from '../../../types/restaurant';
import * as S from './RestaurantList.styled';

const showImage = (category: RestaurantCategory) => {
  switch (category) {
    case '한식':
      return 'korean';
    case '일식':
      return 'japanese';
    case '중식':
      return 'chinese';
    case '양식':
      return 'western';
    case '아시안':
      return 'asian';
    default:
      return 'etc';
  }
};

function RestaurantList() {
  const { restaurantList } = useRestaurants();

  return (
    <S.RestaurantListContainer>
      <S.RestaurantList>
        {restaurantList &&
          restaurantList.map((restaurant) => (
            <S.Restaurant key={restaurant.id}>
              <S.RestaurantCategory>
                <S.CategoryIcon
                  src={`src/assets/category-${showImage(
                    restaurant.category
                  )}.png`}
                  alt={restaurant.category}
                />
              </S.RestaurantCategory>
              <S.RestaurantInfo>
                <S.RestaurantName>피양콩할마니</S.RestaurantName>
                <S.RestaurantDescription>
                  평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩
                  할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로,
                  ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는
                  이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지
                  않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표
                  메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골
                  또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은
                  손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.
                </S.RestaurantDescription>
              </S.RestaurantInfo>
            </S.Restaurant>
          ))}
      </S.RestaurantList>
    </S.RestaurantListContainer>
  );
}

export default RestaurantList;
