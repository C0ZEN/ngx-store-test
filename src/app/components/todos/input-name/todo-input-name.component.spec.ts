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

import { TodoInputNameComponent } from './todo-input-name.component';

describe('TodoInputNameComponent:', () => {
  let component: TodoInputNameComponent;
  let fixture: ComponentFixture<TodoInputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoInputNameComponent
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
    fixture = TestBed.createComponent(TodoInputNameComponent);
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
