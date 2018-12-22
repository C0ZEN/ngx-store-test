import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Third parties
    environment.production ? null : AkitaNgDevtools.forRoot({
      logTrace: true
    }),
    environment.production ? null : AkitaNgRouterStoreModule.forRoot(),

    // App
    NavbarModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
