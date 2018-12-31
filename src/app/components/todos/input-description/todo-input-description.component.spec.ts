import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { TodoInputDescriptionComponent } from './todo-input-description.component';

describe('TodoInputDescriptionComponent', () => {
  let component: TodoInputDescriptionComponent;
  let fixture: ComponentFixture<TodoInputDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputDescriptionComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
