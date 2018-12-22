import { NgModule } from '@angular/core';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  imports: [
    AkitaNgDevtools.forRoot({
      logTrace: true
    }),
    AkitaNgRouterStoreModule.forRoot()
  ]
})
export class AppDevModule {
}
