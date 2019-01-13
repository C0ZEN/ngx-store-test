import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import * as _ from 'lodash';
import { AppModService } from './services/app/app-mod.service';
import { MaterialIconsService } from './services/icons/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  public constructor(
    private materialIconsService: MaterialIconsService,
    private appModService: AppModService
  ) {
  }

  public ngOnInit(): void {

    // Fetch and declare all icons used for this application
    this.materialIconsService.fetchIcons();

    // Check the app mod
    this.appModService.check();
  }

  public ngOnDestroy(): void {

    // Hack to remove modal when the HMR refresh
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('cdk-overlay-container');
    _.forEach(elements, (element: Element) => {
      element.innerHTML = '';
    });
  }
}
