import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [

    // Angular
    CommonModule,
    RouterModule,

    // Third parties
    MatToolbarModule,
    MatTabsModule
  ]
})
export class NavbarModule {
}
