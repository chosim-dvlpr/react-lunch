import Filter from './Filter/Filter';
import RestaurantList from './Restaurant/RestaurantList/RestaurantList';
import Tab from './Tab/Tab';
import useTabContext from '../../hooks/useTabContext';
import useFilter from '../../hooks/useFilter';

function Content() {
  const { selectedTab } = useTabContext();

  const {
    restaurantList,
    likedRestaurantList,
    handleCategoryChange,
    handleSortingChange,
  } = useFilter();
  
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
