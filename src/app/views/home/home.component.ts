import {
  Component,
  OnInit
} from '@angular/core';
import { HomeConfigurationCategories } from './data/home-configuration-categories.data';
import { HomeFeaturesCategories } from './data/home-features-categories.data';
import { HomeConfigurationCategoryInterface } from './interfaces/home-configuration-category.interface';
import { HomeFeaturesItemInterface } from './interfaces/home-features-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  public configurationCategories: HomeConfigurationCategoryInterface[] = HomeConfigurationCategories;
  public featuresCategories: HomeFeaturesItemInterface[] = HomeFeaturesCategories;

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
