import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { TodoInputNameComponent } from './todo-input-name.component';

describe('TodoInputNameComponent', () => {
  let component: TodoInputNameComponent;
  let fixture: ComponentFixture<TodoInputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputNameComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
