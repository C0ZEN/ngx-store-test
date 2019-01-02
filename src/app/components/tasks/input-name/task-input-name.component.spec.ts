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

import { TaskInputNameComponent } from './task-input-name.component';

describe('TaskInputNameComponent:', () => {
  let component: TaskInputNameComponent;
  let fixture: ComponentFixture<TaskInputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskInputNameComponent
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
    fixture = TestBed.createComponent(TaskInputNameComponent);
    component = fixture.componentInstance;
  });

  describe('before init, it', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('after init, it', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
  });
});
