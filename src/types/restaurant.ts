export type RestaurantCategory =
  | 'all'
  | 'korean'
  | 'japanese'
  | 'western'
  | 'chinese'
  | 'asian'
  | 'etc';

export interface Restaurant {
  category: RestaurantCategory;
  description: string;
  id: string;
  name: string;
  distance: number;
}

export type Sorting = 'nameAsc' | 'distanceAsc';
