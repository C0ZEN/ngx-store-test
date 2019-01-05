import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DevModService } from '../dev-mod/dev-mod.service';
import { AppModsEnum } from './enums/app-mods.enum';

@Injectable({
  providedIn: 'root'
})
export class AppModService {
  public constructor(
    private logger: NGXLogger,
    private devModService: DevModService
  ) {
  }

  public check(): void {
    if (this.devModService.isDevMod()) {
      this.log(AppModsEnum.DEVELOPMENT);
    } else {
      this.log(AppModsEnum.PRODUCTION);
    }
  }

  private log(mod: AppModsEnum): void {
    this.logger.debug(`Application running on: ${mod}`);
  }
}
