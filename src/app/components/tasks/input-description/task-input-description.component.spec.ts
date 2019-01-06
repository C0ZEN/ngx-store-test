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

    it('should have a property "formControl" which is undefined', () => {
      expect(component.formControl).toBeUndefined();
    });

    it('should have a property "minLength" which equal 2', () => {
      expect(component.minLength).toBe(2);
    });

    it('should have a property "maxLength" which equal 200', () => {
      expect(component.maxLength).toBe(200);
    });

    it('should have an @Input "defaultValue" which is undefined', () => {
      expect(component.defaultValue).toBeUndefined();
    });

    it('should have an @Input "formControlChange" which is an EventEmitter', () => {
      expect(component.formControlChange).toEqual(new EventEmitter());
    });
  });

  describe('after init', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    describe('get value()', () => {
      let value: any;

      it('should return an empty string when property "formControl" is undefined', () => {
        component.formControl = undefined;

        expect(component.value).toBe('');
      });

      it('should return an empty string when property "formControl.value" is null', () => {
        value = null;
        component.formControl = {
          value: value
        } as FormControl;

        expect(component.value).toBe('');
      });

      it('should return an empty string when property "formControl.value" is undefined', () => {
        value = undefined;
        component.formControl = {
          value: value
        } as FormControl;

        expect(component.value).toBe('');
      });

      it('should return the value when property "formControl.value" is not nil', () => {
        value = 'dummy';
        component.formControl = {
          value: value
        } as FormControl;

        expect(component.value).toBe(value);
      });
    });

    describe('ngOnInit()', () => {
      it('should create a "FormControl" and store it in property "formControl"', () => {
        component.ngOnInit();

        expect(component.formControl).toEqual(jasmine.any(FormControl));
      });

      it('should set as default value for property "formControl" the value of property "defaultValue"', () => {
        component.defaultValue = 'dummy';
        component.formControl = new FormControl('');

        component.ngOnInit();

        expect(component.formControl.value).toEqual(component.defaultValue);
      });

      it('should call "emit" from property "formControlChange" with property "formControl" as parameter', () => {
        spyOn(component.formControlChange, 'emit').and.stub();

        component.ngOnInit();

        expect(component.formControlChange.emit).toHaveBeenCalledTimes(1);
        expect(component.formControlChange.emit).toHaveBeenCalledWith(component.formControl);
      });
    });

    describe('clear()', () => {
      it('should call "setValue" from property "formControl" with null as parameter when property "formControl" is not nil', () => {
        component.formControl = new FormControl('');
        spyOn(component.formControl, 'setValue').and.stub();
        spyOn(_, 'isNil').and.returnValue(false);

        component.clear();

        expect(component.formControl.setValue).toHaveBeenCalledTimes(1);
        expect(component.formControl.setValue).toHaveBeenCalledWith(null);
      });

      it('should not call "setValue" from property "formControl" when property "formControl" is undefined', () => {
        component.formControl = new FormControl('');
        spyOn(component.formControl, 'setValue').and.stub();
        spyOn(_, 'isNil').and.returnValue(true);

        component.clear();

        expect(component.formControl.setValue).not.toHaveBeenCalled();
      });
    });
  });
});
