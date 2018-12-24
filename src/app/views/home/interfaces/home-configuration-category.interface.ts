import { HomeConfigurationItemInterface } from './home-configuration-item.interface';

export interface HomeConfigurationCategoryInterface {
  name: string;
  items: HomeConfigurationItemInterface[];
}
