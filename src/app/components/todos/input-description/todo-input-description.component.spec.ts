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
import { TodoInputDescriptionComponent } from './todo-input-description.component';

describe('TodoInputDescriptionComponent:', () => {
  let component: TodoInputDescriptionComponent;
  let fixture: ComponentFixture<TodoInputDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoInputDescriptionComponent
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
    fixture = TestBed.createComponent(TodoInputDescriptionComponent);
    component = fixture.componentInstance;
  });

  describe('before init', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have a property "minLength" which equal 2', () => {
      expect(component.minLength).toBe(2);
    });

    it('should have a property "maxLength" which equal 200', () => {
      expect(component.maxLength).toBe(200);
    });

    it('should have a property "formControl" which is a "FormControl"', () => {
      expect(component.formControl).toEqual(jasmine.any(FormControl));
    });

    it('should have an @Input "defaultValue" which is undefined', () => {
      expect(component.defaultValue).toBeUndefined();
    });
  });

  describe('after init', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    describe('get value', () => {
      let value: any;

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
      it('should call "setValue" from "formControl" property and use the property "defaultValue" as parameter', () => {
        component.defaultValue = 'dummy';
        component.formControl = new FormControl('');
        spyOn(component.formControl, 'setValue').and.stub();

        component.ngOnInit();

        expect(component.formControl.setValue).toHaveBeenCalledTimes(1);
        expect(component.formControl.setValue).toHaveBeenCalledWith(component.defaultValue);
      });
    });

    describe('clear()', () => {
      it('should call "setValue" from property "formControl" with null as parameter', () => {
        component.formControl = new FormControl('');
        spyOn(component.formControl, 'setValue').and.stub();

        component.clear();

        expect(component.formControl.setValue).toHaveBeenCalledTimes(1);
        expect(component.formControl.setValue).toHaveBeenCalledWith(null);
      });
    });
  });
});
