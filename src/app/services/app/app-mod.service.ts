import {
  Injectable,
  isDevMode
} from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AppModsEnum } from './enums/app-mods.enum';

@Injectable({
  providedIn: 'root'
})
export class AppModService {
  public constructor(
    private logger: NGXLogger
  ) {
  }

  public check(): void {
    if (isDevMode()) {
      this.log(AppModsEnum.DEVELOPMENT);
    } else {
      this.log(AppModsEnum.PRODUCTION);
    }
  }

  private log(mod: AppModsEnum): void {
    this.logger.debug(`Application running on: ${mod}`);
  }
}
