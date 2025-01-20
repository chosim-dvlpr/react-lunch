import { useEffect, useState } from 'react';
import useRestaurants from '../queries/useRestaurants';
import { SORTING } from '../constants/filter';
import { SortingType } from '../types/restaurant';
import { CATEGORIES } from '../constants/filter';
import { CategoryType } from '../types/restaurant';
import useTabContext from './useTabContext';

const DEFAULT_CATEGORY = CATEGORIES.find((category) => category.eng === 'all');
const DEFAULT_SORTING = SORTING.find((sort) => sort.eng === 'nameAsc');

const useFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    DEFAULT_CATEGORY || { kor: '전체', eng: 'all' }
  );
  const [selectedSorting, setSelectedSorting] = useState<SortingType>(
    DEFAULT_SORTING || { kor: '이름순', eng: 'nameAsc' }
  );

  const { selectedTab } = useTabContext();
  const { restaurantList } = useRestaurants(
    selectedCategory.eng,
    selectedSorting.eng
  );

  const likedRestaurantList = restaurantList.filter(
    (restaurant) => restaurant.isLiked
  );

  const handleSelectChange = <T extends CategoryType | SortingType>(
    setState: React.Dispatch<React.SetStateAction<T>>,
    options: T[]
  ) => {
    return (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      const selectedOption = options.find(
        (option) => option.kor === selectedValue
      );

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
    handleCategoryChange: handleSelectChange(setSelectedCategory, CATEGORIES),
    handleSortingChange: handleSelectChange(setSelectedSorting, SORTING),
  };
};

export default useFilter;
