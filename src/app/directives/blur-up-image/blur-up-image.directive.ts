import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import _ from 'lodash';
import { BlurUpImageAttributesEnum } from './enums/blur-up-image-attributes.enum';
import { BlurUpImageClassesEnum } from './enums/blur-up-image-classes.enum';
import { BlurUpImageStylesEnum } from './enums/blur-up-image-styles.enum';

@Directive({
  selector: '[appBlurUpImage]'
})
export class BlurUpImageDirective implements OnInit, AfterViewChecked {

  // @todo implement
  @Input('appBlurUpImageAsImg')
  public asImg: boolean = false;

  @Input('appBlurUpImageBase64')
  public imgBase64: string | undefined;

  @Input('appBlurUpImageSrc')
  public imgSrc: string | undefined;

  @Input('appBlurUpImageDelay')
  public delay: number = 50;

  public constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  public ngOnInit(): void {
    this.addLowQualityImage();
  }

  public ngAfterViewChecked(): void {
    setTimeout(() => {
      this.addHighQualityImage();
    }, this.delay);
  }

  private addLowQualityImage(): void {
    if (_.isString(this.imgBase64)) {
      const backgroundImage: string = this.getBackgroundImage(this.imgBase64);

      this.addClass(BlurUpImageClassesEnum.LOW_QUALITY);
      this.setStyle(BlurUpImageStylesEnum.BACKGROUND_IMAGE, backgroundImage);
      this.removeAttribute(BlurUpImageAttributesEnum.BASE64);
    }
  }

  private addHighQualityImage(): void {
    if (_.isString(this.imgSrc)) {
      const backgroundImage: string = this.getBackgroundImage(this.imgSrc);

      this.removeClass(BlurUpImageClassesEnum.LOW_QUALITY);
      this.addClass(BlurUpImageClassesEnum.HIGH_QUALITY);
      this.setStyle(BlurUpImageStylesEnum.BACKGROUND_IMAGE, backgroundImage);
      this.removeAttribute(BlurUpImageAttributesEnum.SRC);
    }
  }

  private setStyle(style: BlurUpImageStylesEnum, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, style, value);
  }

  private removeAttribute(attribute: BlurUpImageAttributesEnum): void {
    this.renderer.removeAttribute(this.elementRef.nativeElement, attribute);
  }

  private addClass(className: BlurUpImageClassesEnum): void {
    this.renderer.addClass(this.elementRef.nativeElement, className);
  }

  private removeClass(className: BlurUpImageClassesEnum): void {
    this.renderer.removeClass(this.elementRef.nativeElement, className);
  }

  private getBackgroundImage(url: string): string {
    return `url(${url})`;
  }
}
