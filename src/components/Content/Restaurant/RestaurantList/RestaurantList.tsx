import { useState } from 'react';
import useModal from '../../../../hooks/useModal';
import { Restaurant } from '../../../../types/restaurant';
import Modal from '../../../Modal/Modal';
import RestaurantDetail from '../../../RestaurantDetail/RestaurantDetail';
import * as S from '../Restaurant.styled';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

interface RestaurantListProps {
  restaurantList: Restaurant[];
}

function RestaurantList({ restaurantList }: RestaurantListProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const handleSelectedRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    openModal();
  };

  return (
    <S.RestaurantListContainer>
      <S.RestaurantList>
        {restaurantList &&
          restaurantList.map((restaurant) => (
            <RestaurantItem
              restaurant={restaurant}
              onSelectedRestaurant={handleSelectedRestaurant}
              key={restaurant.id}
            />
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
