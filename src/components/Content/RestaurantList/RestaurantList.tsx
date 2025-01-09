import { useState } from 'react';
import useModal from '../../../hooks/useModal';
import { Restaurant } from '../../../types/restaurant';
import Modal from '../../Modal/Modal';
import RestaurantDetail from '../../RestaurantDetail/RestaurantDetail';
import * as S from './RestaurantList.styled';
import useUpdateLiked from '../../../queries/useUpdateLiked';

interface RestaurantListProps {
  restaurantList: Restaurant[];
}

function RestaurantList({ restaurantList }: RestaurantListProps) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { updateLikedRestaurant } = useUpdateLiked();

  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    openModal();
  };

  const handleLikedButtonClick = (
    event: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    event.stopPropagation();
    updateLikedRestaurant({ id });
  };

  return (
    <S.RestaurantListContainer>
      <S.RestaurantList>
        {restaurantList &&
          restaurantList.map((restaurant) => (
            <S.Restaurant
              key={restaurant.id}
              onClick={() => handleRestaurantClick(restaurant)}
            >
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
                        ? 'favorite-icon-filled.png'
                        : 'favorite-icon-lined.png'
                    }`}
                    onClick={(event) =>
                      handleLikedButtonClick(event, restaurant.id)
                    }
                  />
                </S.ListHeaderBox>
                <S.RestaurantDescription>
                  {restaurant.description}
                </S.RestaurantDescription>
              </S.RestaurantInfo>
            </S.Restaurant>
          ))}
      </S.RestaurantList>

      {isModalOpen && selectedRestaurant && (
        <Modal isOpen={isModalOpen} onClose={closeModal} top={324}>
          <RestaurantDetail
            onCloseModal={closeModal}
            restaurant={selectedRestaurant}
          />
        </Modal>
      )}
    </S.RestaurantListContainer>
  );
}

export default RestaurantList;
