import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskInputDescriptionComponent } from './task-input-description.component';

describe('TaskInputDescriptionComponent:', () => {
  let component: TaskInputDescriptionComponent;
  let fixture: ComponentFixture<TaskInputDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskInputDescriptionComponent
      ],
      imports: [

        // Angular
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        // Third parties
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputDescriptionComponent);
    component = fixture.componentInstance;
  });

  describe('before init, it', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have a property "description" which is undefined', () => {
      expect(component.description).toBeUndefined();
    });
  });

  describe('after init, it', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
  });
});
