import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerModule } from 'ngx-logger';

import { TodosTodoComponent } from './todos-todo.component';

describe('TodosTodoComponent:', () => {
  let component: TodosTodoComponent;
  let fixture: ComponentFixture<TodosTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodosTodoComponent
      ],
      imports: [

        // Angular
        RouterTestingModule,

        // Third parties
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        LoggerModule.forRoot(undefined)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTodoComponent);
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
