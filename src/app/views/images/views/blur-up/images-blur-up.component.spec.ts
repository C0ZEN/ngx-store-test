import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BlurUpImageContainerModule } from '../../../../directives/blur-up-image-container/blur-up-image-container.module';
import { BlurUpImageModule } from '../../../../directives/blur-up-image/blur-up-image.module';
import { ImagesBlurUpComponent } from './images-blur-up.component';

describe('ImagesBlurUpComponent:', () => {
  let component: ImagesBlurUpComponent;
  let fixture: ComponentFixture<ImagesBlurUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImagesBlurUpComponent
      ],
      imports: [

        // Angular
        RouterTestingModule,

        // Third parties
        MatButtonModule,

        // Internal
        BlurUpImageModule,
        BlurUpImageContainerModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesBlurUpComponent);
    component = fixture.componentInstance;
  });

  describe('before init', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('after init', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
  });
});
