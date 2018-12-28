import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatListModule
} from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatListModule,
    MatIconModule,

    // Internal
    HomeRoutingModule
  ]
})
export class HomeModule {
}
