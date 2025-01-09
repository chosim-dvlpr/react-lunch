import { RestaurantCategory } from '../../types/restaurant';

export interface AddRestaurantData {
  category: RestaurantCategory;
  name: string;
  distance: number;
  description: string;
  link: string;
}
