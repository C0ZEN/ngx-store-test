import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { ImagesBlurUpModule } from './views/blur-up/images-blur-up.module';

@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,

    // Internal
    ImagesRoutingModule,
    ToolbarModule,

    // Children
    ImagesBlurUpModule
  ]
})
export class ImagesModule {
}
