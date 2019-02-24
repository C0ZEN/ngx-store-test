import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlurUpImageModule } from '../../../../directives/blur-up-image/blur-up-image.module';
import { ImagesBlurUpComponent } from './images-blur-up.component';

@NgModule({
  declarations: [
    ImagesBlurUpComponent
  ],
  imports: [

    // Angular
    CommonModule,

    // Internal
    BlurUpImageModule
  ]
})
export class ImagesBlurUpModule {
}
