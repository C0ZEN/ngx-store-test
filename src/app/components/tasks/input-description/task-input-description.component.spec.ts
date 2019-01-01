import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { TaskInputDescriptionComponent } from './task-input-description.component';

describe('TaskInputDescriptionComponent', () => {
  let component: TaskInputDescriptionComponent;
  let fixture: ComponentFixture<TaskInputDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInputDescriptionComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
