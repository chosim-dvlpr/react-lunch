import { useState } from 'react';
import useRestaurants from '../../queries/useRestaurants';
import Filter from './Filter/Filter';
import RestaurantList from './RestaurantList/RestaurantList';
import { RestaurantCategory, Sorting } from '../../types/restaurant';
import { CATEGORIES, SORTING } from '../../constants/filter';

const isInRestaurantCategory = (item: string): item is RestaurantCategory => {
  return CATEGORIES.includes(item as RestaurantCategory);
};

const isInSorting = (item: string): item is Sorting => {
  return SORTING.includes(item as Sorting);
};

function Content() {
  const [selectedCategory, setSelectedCategory] =
    useState<RestaurantCategory>('all');
  const [selectedSorting, setSelectedSorting] = useState<Sorting>('nameAsc');

  const { restaurantList } = useRestaurants(selectedCategory, selectedSorting);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    if (isInRestaurantCategory(selectedCategory)) {
      setSelectedCategory(selectedCategory);
    }
  };

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSorting = event.target.value;
    if (isInSorting(selectedSorting)) {
      setSelectedSorting(selectedSorting);
    }
  };

  return (
    <>
      <Filter
        handleCategoryChange={handleCategoryChange}
        handleSortingChange={handleSortingChange}
      />
      <RestaurantList restaurantList={restaurantList} />
    </>
  );
}

export default Content;
