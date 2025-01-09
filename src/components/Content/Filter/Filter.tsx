import * as S from './Filter.styled';
import { CATEGORIES, SORTING } from '../../../constants/filter';
import { RestaurantCategory, Sorting } from '../../../types/restaurant';

interface FilterProps {
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSortingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const translateCategory = (category: RestaurantCategory) => {
  switch (category) {
    case 'korean':
      return '한식';
    case 'japanese':
      return '일식';
    case 'chinese':
      return '중식';
    case 'western':
      return '양식';
    case 'asian':
      return '아시안';
    case 'etc':
      return '기타';
    default:
      return '전체';
  }
};

const translateSorting = (sorting: Sorting) => {
  switch (sorting) {
    case 'nameAsc':
      return '이름순';
    case 'distanceAsc':
      return '거리순';
  }
};

function Filter({ handleCategoryChange, handleSortingChange }: FilterProps) {
  return (
    <S.RestaurantFilterContainer>
      <S.Select
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        onChange={handleCategoryChange}
        defaultValue="전체"
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {translateCategory(category)}
          </option>
        ))}
      </S.Select>

      <S.Select
        name="sorting"
        id="sorting-filter"
        aria-label="음식점 정렬 필터"
        onChange={handleSortingChange}
        defaultValue="이름순"
      >
        {SORTING.map((sort) => (
          <option key={sort} value={sort}>
            {translateSorting(sort)}
          </option>
        ))}
      </S.Select>
    </S.RestaurantFilterContainer>
  );
}

export default Filter;
