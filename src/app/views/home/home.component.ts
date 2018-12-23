import {
  Component,
  OnInit
} from '@angular/core';
import { HomeConfigurationItems } from './data/home-configuration-items.data';
import { HomeConfigurationItemInterface } from './interfaces/home-configuration-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  public configurationItems: HomeConfigurationItemInterface[] = HomeConfigurationItems;

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
