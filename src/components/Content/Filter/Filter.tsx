import * as S from './Filter.styled';
import { CATEGORIES } from '../../../constants/category';
import { RestaurantCategory } from '../../../types/restaurant';

interface FilterProps {
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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

function Filter({ handleCategoryChange }: FilterProps) {
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
    </S.RestaurantFilterContainer>
  );
}

export default Filter;
