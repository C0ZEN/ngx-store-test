import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { ErrorViewNotFoundComponent } from './error-view-not-found.component';

describe('ErrorViewNotFoundComponent:', () => {
  let component: ErrorViewNotFoundComponent;
  let fixture: ComponentFixture<ErrorViewNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorViewNotFoundComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorViewNotFoundComponent);
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
