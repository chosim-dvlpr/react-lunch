import { UICategoryType, UISortingType } from '../types/restaurant';

export const CATEGORIES: UICategoryType[] = [
  { label: '전체', value: 'all' },
  { label: '한식', value: 'korean' },
  { label: '일식', value: 'japanese' },
  { label: '양식', value: 'western' },
  { label: '중식', value: 'chinese' },
  { label: '아시안', value: 'asian' },
  { label: '기타', value: 'etc' },
] as const;

export const SORTING: UISortingType[] = [
  { label: '이름순', value: 'nameAsc' },
  { label: '거리순', value: 'distanceAsc' },
] as const;

export const DEFAULT_CATEGORY = 'all';
export const DEFAULT_SORTING = 'nameAsc';
