export type RestaurantCategory =
  | 'all'
  | 'korean'
  | 'japanese'
  | 'western'
  | 'chinese'
  | 'asian'
  | 'etc';

export type CategoryKorean =
  | '전체'
  | '한식'
  | '양식'
  | '일식'
  | '중식'
  | '아시안'
  | '기타';

export interface Restaurant {
  category: RestaurantCategory;
  description?: string;
  id: string;
  name: string;
  distance: number;
  link?: string;
  isLiked: boolean;
}

export type Sorting = 'nameAsc' | 'distanceAsc';
export type SortingKorean = '이름순' | '거리순';
