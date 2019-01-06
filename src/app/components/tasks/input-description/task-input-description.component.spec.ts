import { EventEmitter } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormControl,
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
import * as _ from 'lodash';

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

  describe('before init', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have a property "description" which is undefined', () => {
      expect(component.description).toBeUndefined();
    });

    it('should have a property "minLength" which equal 2', () => {
      expect(component.minLength).toBe(2);
    });

    it('should have a property "maxLength" which equal 200', () => {
      expect(component.maxLength).toBe(200);
    });

    it('should have an @Input "defaultName" which is undefined', () => {
      expect(component.defaultName).toBeUndefined();
    });

    it('should have an @Input "formControl" which is an EventEmitter', () => {
      expect(component.formControl).toEqual(new EventEmitter());
    });
  });

  describe('after init', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    describe('get value()', () => {
      let value: any;

      it('should return an empty string when property "description" is undefined', () => {
        component.description = undefined;

        expect(component.value).toBe('');
      });

      it('should return an empty string when property "description.value" is null', () => {
        value = null;
        component.description = {
          value: value
        } as FormControl;

        expect(component.value).toBe('');
      });

      it('should return an empty string when property "description.value" is undefined', () => {
        value = undefined;
        component.description = {
          value: value
        } as FormControl;

        expect(component.value).toBe('');
      });

      it('should return the value when property "description.value" is not nil', () => {
        value = 'dummy';
        component.description = {
          value: value
        } as FormControl;

        expect(component.value).toBe(value);
      });
    });

    describe('ngOnInit()', () => {
      it('should create a "FormControl" and store it in property "description"', () => {
        component.ngOnInit();

        expect(component.description).toEqual(jasmine.any(FormControl));
      });

      it('should set as default value for property "description" the value of property "defaultName"', () => {
        component.defaultName = 'dummy';
        component.description = new FormControl('');

        component.ngOnInit();

        expect(component.description.value).toEqual(component.defaultName);
      });

      it('should call "emit" from property "formControl" with property "description" as parameter', () => {
        spyOn(component.formControl, 'emit').and.stub();

        component.ngOnInit();

        expect(component.formControl.emit).toHaveBeenCalledTimes(1);
        expect(component.formControl.emit).toHaveBeenCalledWith(component.description);
      });
    });

    describe('clear()', () => {
      it('should call "setValue" from property "description" with null as parameter when property "description" is not nil', () => {
        component.description = new FormControl('');
        spyOn(component.description, 'setValue').and.stub();
        spyOn(_, 'isNil').and.returnValue(false);

        component.clear();

        expect(component.description.setValue).toHaveBeenCalledTimes(1);
        expect(component.description.setValue).toHaveBeenCalledWith(null);
      });

      it('should not call "setValue" from property "description" when property "description" is undefined', () => {
        component.description = new FormControl('');
        spyOn(component.description, 'setValue').and.stub();
        spyOn(_, 'isNil').and.returnValue(true);

        component.clear();

        expect(component.description.setValue).not.toHaveBeenCalled();
      });
    });
  });
});
