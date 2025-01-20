import { useState } from 'react';
import useRestaurants from '../../queries/useRestaurants';
import Filter from './Filter/Filter';
import RestaurantList from './Restaurant/RestaurantList/RestaurantList';
import { CATEGORIES, SORTING } from '../../constants/filter';
import Tab from './Tab/Tab';
import useTabContext from '../../hooks/useTabContext';
import { CategoryType, SortingType } from '../../types/restaurant';

function Content() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>({
    kor: '전체',
    eng: 'all',
  });
  const [selectedSorting, setSelectedSorting] = useState<SortingType>({
    kor: '이름순',
    eng: 'nameAsc',
  });

  const { restaurantList } = useRestaurants(
    selectedCategory.eng,
    selectedSorting.eng
  );

  const { selectedTab } = useTabContext();
  const likedRestaurantList = restaurantList.filter(
    (restaurant) => restaurant.isLiked
  );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    const data = CATEGORIES.find(
      (category) => category.kor === selectedCategory
    );

    if (!data) return;

    setSelectedCategory(data);
  };

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSorting = event.target.value;
    const data = SORTING.find((sort) => sort.kor === selectedSorting);

    if (!data) return;

    setSelectedSorting(data);
  };

  const tabRenderer: Record<string, JSX.Element> = {
    liked: <RestaurantList restaurantList={likedRestaurantList} />,
    default: (
      <>
        <Filter
          handleCategoryChange={handleCategoryChange}
          handleSortingChange={handleSortingChange}
        />
        <RestaurantList restaurantList={restaurantList} />
      </>
    ),
  };

  const renderedTab = tabRenderer[selectedTab] || tabRenderer.default;

  return (
    <>
      <Tab />
      {renderedTab}
    </>
  );
}

export default Content;
