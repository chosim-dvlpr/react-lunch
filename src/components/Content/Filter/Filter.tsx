import * as S from './Filter.styled';
import { CATEGORIES, SORTING } from '../../../constants/filter';

interface FilterProps {
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSortingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

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
        {CATEGORIES.map((category, index) => (
          <option key={index} value={category.kor}>
            {category.kor}
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
        {SORTING.map((sort, index) => (
          <option key={index} value={sort.kor}>
            {sort.kor}
          </option>
        ))}
      </S.Select>
    </S.RestaurantFilterContainer>
  );
}

export default Filter;
