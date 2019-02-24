import { Injectable } from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  public constructor(
    private router: Router
  ) {
  }

  public onNavigationEnd$(): Observable<any> {
    return this.router.events
      .pipe(
        filter(routerEvent => {
          return routerEvent instanceof NavigationEnd;
        })
      );
  }

  public getRouter(): Router {
    return this.router;
  }
}
