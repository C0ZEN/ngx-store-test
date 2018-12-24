import {
  Component,
  OnInit
} from '@angular/core';
import { HomeConfigurationCategories } from './data/home-configuration-categories.data';
import { HomeConfigurationCategoryInterface } from './interfaces/home-configuration-category.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  public configurationCategories: HomeConfigurationCategoryInterface[] = HomeConfigurationCategories;

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
