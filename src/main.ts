import {
  enableProdMode,
  NgModuleRef
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  enableAkitaProdMode,
  persistState
} from '@datorama/akita';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

persistState();

const bootstrap: any = (): Promise<NgModuleRef<AppModule>> => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr.isEnabled) {
  if ((module as any)[ 'hot' ]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server !');
    console.log('Are you using the --hmr flag for ng serve ?');
  }
} else {
  bootstrap().catch((err: any) => console.log(err));
}
