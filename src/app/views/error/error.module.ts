import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';

import { ErrorComponent } from './error.component';
import { ErrorViewNotFoundModule } from './views/view-not-found/error-view-not-found.module';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Internal
    ErrorRoutingModule,

    // Children
    ErrorViewNotFoundModule
  ]
})
export class ErrorModule {
}
