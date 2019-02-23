import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlurUpImageDirective } from './blur-up-image.directive';

@NgModule({
  declarations: [
    BlurUpImageDirective
  ],
  exports: [
    BlurUpImageDirective
  ],
  imports: [

    // Angular
    CommonModule
  ]
})
export class BlurUpImageModule {
}
