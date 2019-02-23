import { MaterialIconsEnum } from '../../../services/icons/enums/material-icons.enum';
import { HomeFeaturesItemInterface } from '../interfaces/home-features-item.interface';

export const HomeFeaturesCategories: HomeFeaturesItemInterface[] = [
  {
    label: 'Todos',
    description: 'THe todos feature is all about Akita. This is a perfect example to use redux with Akita because the todos data ' +
      'structure is about two levels with the first one using active state and the second one using an UI store.',
    icon: MaterialIconsEnum.CHECKLIST
  },
  {
    label: 'Blur Up technique',
    description: 'When displaying an image, you could use two versions - one at a very poor quality and the second one with high ' +
      'quality and loaded asynchronous. The change will trigger a blur effect.',
    icon: MaterialIconsEnum.PICTURE
  }
];
