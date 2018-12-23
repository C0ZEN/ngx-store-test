import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppDevModule } from './app.dev.module';
import { AppProdModule } from './app.prod.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Third parties
    environment.production ? AppProdModule : AppDevModule,

    // App
    NavbarModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
