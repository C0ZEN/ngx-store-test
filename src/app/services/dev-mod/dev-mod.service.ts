import {
  Injectable,
  isDevMode
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevModService {
  public constructor() {
  }

  public isDevMod(): boolean {
    return isDevMode();
  }
}
