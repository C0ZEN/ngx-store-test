import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { BlurUpImageContainerModule } from '../../../../directives/blur-up-image-container/blur-up-image-container.module';
import { BlurUpImageModule } from '../../../../directives/blur-up-image/blur-up-image.module';
import { ImagesBlurUpComponent } from './images-blur-up.component';

@NgModule({
  declarations: [
    ImagesBlurUpComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Third parties
    MatButtonModule,

    // Internal
    BlurUpImageModule,
    BlurUpImageContainerModule
  ]
})
export class ImagesBlurUpModule {
}
