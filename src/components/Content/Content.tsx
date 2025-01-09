import { useState } from 'react';
import useRestaurants from '../../queries/useRestaurants';
import Filter from './Filter/Filter';
import RestaurantList from './RestaurantList/RestaurantList';
import { RestaurantCategory } from '../../types/restaurant';
import { CATEGORIES } from '../../constants/category';

const isInRestaurantCategory = (item: string): item is RestaurantCategory => {
  return CATEGORIES.includes(item as RestaurantCategory);
};

function Content() {
  const [selectedCategory, setSelectedCategory] =
    useState<RestaurantCategory>('all');
  const { restaurantList } = useRestaurants(selectedCategory);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    if (isInRestaurantCategory(selectedCategory)) {
      setSelectedCategory(selectedCategory);
    }
  };

  return (
    <>
      <Filter handleCategoryChange={handleCategoryChange} />
      <RestaurantList restaurantList={restaurantList} />
    </>
  );
}

export default Content;
