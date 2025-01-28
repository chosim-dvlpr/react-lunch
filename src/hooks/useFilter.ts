import { useEffect, useState } from 'react';
import useRestaurants from '../queries/useRestaurants';
import {
  DEFAULT_CATEGORY,
  DEFAULT_SORTING,
  SORTING,
} from '../constants/filter';
import { CATEGORIES } from '../constants/filter';
import useTabContext from './useTabContext';
import { RestaurantCategory, Sorting } from '../types/restaurant';

const useFilter = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<RestaurantCategory>(DEFAULT_CATEGORY);
  const [selectedSorting, setSelectedSorting] =
    useState<Sorting>(DEFAULT_SORTING);

  const { selectedTab } = useTabContext();
  const { restaurantList } = useRestaurants(selectedCategory, selectedSorting);

  const likedRestaurantList = restaurantList.filter(
    (restaurant) => restaurant.isLiked
  );

  const handleSelectChange = <T extends string>(
    setState: React.Dispatch<React.SetStateAction<T>>,
    options: T[]
  ) => {
    return (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;

      const selectedOption = options.find((option) => option === selectedValue);

      if (selectedOption) {
        setState(selectedOption);
      }
    };
  };

  useEffect(() => {
    if (DEFAULT_CATEGORY && DEFAULT_SORTING) {
      setSelectedCategory(DEFAULT_CATEGORY);
      setSelectedSorting(DEFAULT_SORTING);
    }
  }, [selectedTab]);

  return {
    restaurantList,
    likedRestaurantList,
    handleCategoryChange: handleSelectChange(
      setSelectedCategory,
      CATEGORIES.map((category) => category.value)
    ),
    handleSortingChange: handleSelectChange(
      setSelectedSorting,
      SORTING.map((sort) => sort.value)
    ),
  };
};

export default useFilter;
