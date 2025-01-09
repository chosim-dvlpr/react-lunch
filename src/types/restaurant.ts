export type RestaurantCategory =
  | 'all'
  | 'korean'
  | 'japanese'
  | 'western'
  | 'chinese'
  | 'asian'
  | 'etc';

export type CategoryKorean = '한식' | '양식' | '일식' | '중식' | '아시안' | '기타';

export interface Restaurant {
  category: RestaurantCategory;
  description?: string;
  id: string;
  name: string;
  distance: number;
  link?: string;
}

export type Sorting = 'nameAsc' | 'distanceAsc';
