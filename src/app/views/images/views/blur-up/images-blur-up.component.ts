import {
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import _ from 'lodash';
import { BlurUpImageDirective } from '../../../../directives/blur-up-image/blur-up-image.directive';

@Component({
  selector: 'app-images-blur-up',
  templateUrl: './images-blur-up.component.html',
  styleUrls: [
    './images-blur-up.component.scss'
  ]
})
export class ImagesBlurUpComponent implements OnInit {
  public base64: string = 'data:image/jpeg;base64,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';
  public src: string = '/assets/images/pictures/colosseum/colosseum-hd.jpg';

  @ViewChildren(BlurUpImageDirective)
  public blurUpImages: QueryList<BlurUpImageDirective> | undefined;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public loadLowQualityImage(): void {
    if (!_.isNil(this.blurUpImages)) {
      const blurUpImage: BlurUpImageDirective | undefined = this.getBlurUpImage(3);

      if (!_.isNil(blurUpImage)) {
        blurUpImage.showLowQualityImage();
      }
    }
  }

  public loadHighQualityImage(): void {
    if (!_.isNil(this.blurUpImages)) {
      const blurUpImage: BlurUpImageDirective | undefined = this.getBlurUpImage(3);

      if (!_.isNil(blurUpImage)) {
        blurUpImage.showHighQualityImage();
      }
    }
  }

  private getBlurUpImage(blurUpImageIndex: number): BlurUpImageDirective | undefined {
    if (!_.isNil(this.blurUpImages)) {
      return this.blurUpImages.find((entity: BlurUpImageDirective, index: number) => {
        return _.isEqual(index, blurUpImageIndex);
      });
    }
    return undefined;
  }
}
