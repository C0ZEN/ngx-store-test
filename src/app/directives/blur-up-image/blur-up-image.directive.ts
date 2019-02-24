import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import _ from 'lodash';
import { BlurUpImageClassesEnum } from './enums/blur-up-image-classes.enum';
import { BlurUpImageStylesEnum } from './enums/blur-up-image-styles.enum';

@Directive({
  selector: '[appBlurUpImage]'
})
export class BlurUpImageDirective implements OnInit, AfterViewChecked {

  @Input('appBlurUpImageBase64')
  public imgBase64: string | undefined;

  @Input('appBlurUpImageSrc')
  public imgSrc: string | undefined;

  @Input('appBlurUpImageDelay')
  public delay: number = 50;

  @Input('appBlurUpImageAutoLoad')
  public autoLoad: boolean = true;

  public constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  public ngOnInit(): void {
    this.setStyle(BlurUpImageStylesEnum.CLIP, `rect(0px, ${this.elementRef.nativeElement.offsetWidth}px, ${this.elementRef.nativeElement.offsetHeight}px, 0px)`);
    this.showLowQualityImage();
  }

  public ngAfterViewChecked(): void {
    if (this.autoLoad) {
      setTimeout(() => {
        this.showHighQualityImage();
      }, this.delay);
    }
  }

  public showLowQualityImage(): void {
    if (_.isString(this.imgBase64)) {
      const backgroundImage: string = this.getBackgroundImage(this.imgBase64);

      this.removeClass(BlurUpImageClassesEnum.HIGH_QUALITY);
      this.addClass(BlurUpImageClassesEnum.LOW_QUALITY);
      this.setStyle(BlurUpImageStylesEnum.BACKGROUND_IMAGE, backgroundImage);
    }
  }

  public showHighQualityImage(): void {
    if (_.isString(this.imgSrc)) {
      const backgroundImage: string = this.getBackgroundImage(this.imgSrc);

      this.removeClass(BlurUpImageClassesEnum.LOW_QUALITY);
      this.addClass(BlurUpImageClassesEnum.HIGH_QUALITY);
      this.setStyle(BlurUpImageStylesEnum.BACKGROUND_IMAGE, backgroundImage);
    }
  }

  private setStyle(style: BlurUpImageStylesEnum, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, style, value);
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
