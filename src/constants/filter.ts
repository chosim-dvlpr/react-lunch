
import {
  CategoryKorean,
  RestaurantCategory,
  Sorting,
  SortingKorean,
} from '../types/restaurant';

export interface CategoryType {
  kor: CategoryKorean;
  eng: RestaurantCategory;
}

export const CATEGORIES: CategoryType[] = [
  {
    kor: '전체',
    eng: 'all',
  },
  {
    kor: '한식',
    eng: 'korean',
  },
  {
    kor: '일식',
    eng: 'japanese',
  },
  {
    kor: '양식',
    eng: 'western',
  },
  {
    kor: '중식',
    eng: 'chinese',
  },
  {
    kor: '아시안',
    eng: 'asian',
  },
  {
    kor: '기타',
    eng: 'etc',
  },
] as const;

export interface SortingType {
  kor: SortingKorean;
  eng: Sorting;
}

export const SORTING: SortingType[] = [
  { kor: '이름순', eng: 'nameAsc' },
  { kor: '거리순', eng: 'distanceAsc' },
] as const;
