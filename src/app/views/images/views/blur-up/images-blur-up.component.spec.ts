import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
        RouterTestingModule
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
