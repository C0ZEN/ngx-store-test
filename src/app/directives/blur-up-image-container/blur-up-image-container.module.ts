import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlurUpImageContainerDirective } from './blur-up-image-container.directive';

@NgModule({
  declarations: [
    BlurUpImageContainerDirective
  ],
  exports: [
    BlurUpImageContainerDirective
  ],
  imports: [

    // Angular
    CommonModule
  ]
})
export class BlurUpImageContainerModule {
}
