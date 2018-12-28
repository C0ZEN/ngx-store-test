import {
  Component,
  OnInit
} from '@angular/core';
import { AppModService } from './services/app/app-mod.service';
import { MaterialIconsService } from './services/icons/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  public constructor(
    private materialIconsService: MaterialIconsService,
    private appModService: AppModService
  ) {
  }

  public ngOnInit(): void {

    // Fetch and declare all icons used for this application
    this.materialIconsService.fetchIcons();

    // Check the app mod (log it)
    this.appModService.check();
  }
}
