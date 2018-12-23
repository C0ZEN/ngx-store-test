import { MaterialIconsEnum } from '../../../services/icons/enums/material-icons.enum';
import { HomeConfigurationItemInterface } from '../interfaces/home-configuration-item.interface';

export const HomeConfigurationItems: HomeConfigurationItemInterface[] = [
  {
    label: 'Scaffolding',
    description: 'The skeleton of the project and the way the files are named and organized provide a consistent and logic way to split ' +
      'the files but keep it simple and focus on modularity.',
    icon: MaterialIconsEnum.DOCUMENTS_FOLDER
  },
  {
    label: 'HMR',
    description: 'The Hot Module Replacement is useful to speedup the development time by recompiling only changed files. This should be ' +
      'configured for each Angular project without a doubt.',
    icon: MaterialIconsEnum.SPEED
  },
  {
    label: 'Angular Material',
    description: 'As you might see, this project use Angular Material to provide a consistent and fast way to design the ' +
      'content and you can check out the whole configuration and some examples on how use it and customize it.',
    icon: MaterialIconsEnum.WEB_DESIGN
  }
];
