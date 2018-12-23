import {
  Component,
  OnInit
} from '@angular/core';
import { MaterialIconsService } from './services/icons/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  public constructor(private materialIconsService: MaterialIconsService) {
  }

  public ngOnInit(): void {
    this.materialIconsService.fetchIcons();
  }
}
