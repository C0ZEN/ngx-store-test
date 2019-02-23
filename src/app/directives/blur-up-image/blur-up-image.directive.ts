import {
  Directive,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBlurUpImage]'
})
export class BlurUpImageDirective {

  @Input('appBlurUpImageHasImg')
  public hasImg: boolean = false;

  public constructor() {
  }
}
