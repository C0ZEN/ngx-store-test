import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { MaterialIcons } from './data/material-icons.data';
import { MaterialIconsIconInterface } from './interfaces/material-icons-icon.interface';

@Injectable({
  providedIn: 'root'
})
export class MaterialIconsService {
  public constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  public fetchIcons(): void {
    _.forEach(this.getIcons(), (icon: MaterialIconsIconInterface) => {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/images/${icon.path}`));
    });
  }

  public getIcons(): MaterialIconsIconInterface[] {
    return MaterialIcons;
  }
}
