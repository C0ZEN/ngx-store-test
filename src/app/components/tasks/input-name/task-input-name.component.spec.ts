import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { TaskInputNameComponent } from './task-input-name.component';

describe('TaskInputNameComponent', () => {
  let component: TaskInputNameComponent;
  let fixture: ComponentFixture<TaskInputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInputNameComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
